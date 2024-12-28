import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import DataTable from "../components/DataTable";
import { getAllEvents, deleteEvent } from "../services/eventService";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const data = await getAllEvents();
            setEvents(data);
        } catch (error) {
            console.error("Etkinlikler yüklenirken hata oluştu:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Etkinlik silinecek, emin misiniz?")) {
            try {
                await deleteEvent(id);
                fetchEvents();
            } catch (error) {
                console.error("Silme işlemi başarısız:", error);
            }
        }
    };

    const handleGoToEventAdd = () => {
        navigate("/add_event");
    };

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'date', headerName: 'Tarih', align: 'left' },
        { field: 'description', headerName: 'Açıklama', align: 'left' },
        { field: 'summary', headerName: 'Özet', align: 'left' },
        { field: 'status', headerName: 'Durum', align: 'left' }
    ];

    const actionButtons = (row) => (
        <Button variant="danger" onClick={() => handleDelete(row.id)}>
            <FontAwesomeIcon icon={faCircleXmark} className="me-2" />
            Sil
        </Button>
    );

    return (
        <Container>
            <Row className="my-4">
                <Col><h1>Etkinlikler</h1></Col>
                <Col>
                    <Button variant="success" onClick={handleGoToEventAdd}>
                        <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
                        Etkinlik Ekle
                    </Button>
                </Col>
            </Row>
            <DataTable
                data={events}
                columns={columns}
                actions={actionButtons}
            />
        </Container>
    );
};

export default EventList;