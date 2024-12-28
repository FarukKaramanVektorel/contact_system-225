import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../services/eventService";
import SelectContact from "../feature/SelectContact";

const AddEvent = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        contactId: "",
        date: "",
        description: "",
        summary: "",
        status: true,
    });
    const [saved, setSaved] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEvent(data);
            setSaved("Etkinlik başarıyla eklendi");
            setTimeout(() => {
                navigate("/events");
            }, 1500);
        } catch (error) {
            setSaved("Etkinlik eklenirken hata oluştu");
        }
    };

    return (
        <Container>
            <h2 className="my-4">Etkinlik Ekle</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label>Kişi</Form.Label>
                            <SelectContact
                                value={data.contactId}
                                setData={setData}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label>Tarih</Form.Label>
                            <Form.Control
                                type="date"
                                value={data.date}
                                onChange={(e) => setData({ ...data, date: e.target.value })}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label>Açıklama</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={data.description}
                                onChange={(e) =>
                                    setData({ ...data, description: e.target.value })
                                }
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label>Özet</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.summary}
                                onChange={(e) => setData({ ...data, summary: e.target.value })}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant="primary">
                    Kaydet
                </Button>
            </Form>
            {saved && <Alert variant="info" className="mt-3">{saved}</Alert>}
        </Container>
    );
};

export default AddEvent;