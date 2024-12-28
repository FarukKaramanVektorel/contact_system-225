import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { getContactById } from "../services/contactService";
import { createEvent } from "../services/eventService";

const ContactDetails = () => {
    const { id } = useParams(); // URL'den kişi ID'sini al
    const [contact, setContact] = useState(null);
    const [showModal, setShowModal] = useState(false); // Modal kontrolü
    const [eventData, setEventData] = useState({
        contactId: id,
        date: "",
        description: "",
        summary: "",
        status: true,
    });

    useEffect(() => {
        if (id) {
            fetchContactDetails();
        }
    }, [id]);

    const fetchContactDetails = async () => {
        try {
            const data = await getContactById(id);
            setContact(data);
        } catch (error) {
            console.error("Kişi detayları alınamadı:", error);
        }
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const handleEventChange = (e) => {
        const { name, value } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEventSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEvent(eventData); // Etkinlik ekleme API çağrısı
            setEventData({
                contactId: id,
                date: "",
                description: "",
                summary: "",
                status: true,
            });
            handleModalClose();
            fetchContactDetails(); // Sayfayı güncelle
        } catch (error) {
            console.error("Etkinlik eklenemedi:", error);
        }
    };

    if (!contact) {
        return <p>Yükleniyor...</p>;
    }

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <h1>Kişi Detayları</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Kişi Bilgileri</Card.Title>
                            <Card.Text>
                                <strong>Ad:</strong> {contact.name} <br />
                                <strong>Soyad:</strong> {contact.lastname} <br />
                                <strong>Telefon:</strong> {contact.infoDto?.phone} <br />
                                <strong>E-posta:</strong> {contact.infoDto?.eMail} <br />
                                <strong>Adres:</strong> {contact.infoDto?.address} <br />
                                <strong>Açıklama:</strong> {contact.infoDto?.description} <br />
                                <strong>Durum:</strong> {contact.status ? "Aktif" : "Pasif"} <br />
                                <strong>Kategori:</strong> {contact.categoryDto?.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Doğum ve Cinsiyet</Card.Title>
                            <Card.Text>
                                <strong>Doğum Tarihi:</strong> {contact.infoDto?.birthDate} <br />
                                <strong>Cinsiyet:</strong>{" "}
                                {contact.infoDto?.gender === 1 ? "Erkek" : "Kadın"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Etkinlikler</h2>
                    <Button variant="primary" onClick={handleModalShow}>
                        Etkinlik Ekle
                    </Button>
                    {contact.eventDto?.length > 0 ? (
                        <Table striped bordered hover className="mt-3">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Tarih</th>
                                <th>Özet</th>
                                <th>Açıklama</th>
                                <th>Durum</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contact.eventDto.map((event, index) => (
                                <tr key={event.id}>
                                    <td>{index + 1}</td>
                                    <td>{event.date}</td>
                                    <td>{event.summary}</td>
                                    <td>{event.description}</td>
                                    <td>{event.status ? "Aktif" : "Pasif"}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p>Bu kişiye ait etkinlik bulunmamaktadır.</p>
                    )}
                </Col>
            </Row>

            {/* Etkinlik Ekleme Modal */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Etkinlik Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEventSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tarih</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={eventData.date}
                                onChange={handleEventChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Özet</Form.Label>
                            <Form.Control
                                type="text"
                                name="summary"
                                value={eventData.summary}
                                onChange={handleEventChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Açıklama</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={eventData.description}
                                onChange={handleEventChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Aktif"
                                name="status"
                                checked={eventData.status}
                                onChange={(e) =>
                                    setEventData((prevData) => ({
                                        ...prevData,
                                        status: e.target.checked,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Kaydet
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ContactDetails;