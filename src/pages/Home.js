import React, { useEffect, useState } from 'react'

import { Button, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {getAllContacts} from "../services/contactService";
import {getAllCategories} from "../services/categoryService";

const Home = () => {
    const [contacts, setContacts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryLimit, setCategoryLimit] = useState(0);
    const [contactLimit, setContactLimit] = useState(0);
    const navigate = useNavigate();
    const fetchContacts = async () => {
        const data = await getAllContacts();
        setContacts(data);
    };
    useEffect(() => {
        fetchContacts();
        fetchCategories();
    }, []);
    useEffect(() => {
        let maxCategory = 50;
        let maxContact = 1000;
        let nowCategory = categories.length
        let nowContact = contacts.length
        setCategoryLimit((nowCategory / maxCategory) * 100)
        setContactLimit((nowContact / maxContact) * 100)
    }, [contacts, categories]);
    const fetchCategories = async () => {
        const data = await getAllCategories();
        setCategories(data);
    };
    const cardImageStyle = {
        width: '100px',
        height: '100px',
        margin: '20px auto',
        objectFit: 'contain'
    };
    const handleCategoryClick = () => {
        navigate("/categories")
    }
    const handleContactClick = () => {
        navigate("/contacts")
    }
    const handleEventClick = () => {
        navigate("/events"); 
    }

    return (
        <Container className="my-4">
            <Row>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/cat.png" style={cardImageStyle} />
                        <Card.Body>
                            <Card.Title>Kategoriler</Card.Title>
                            <Card.Text>
                                Toplam {categories.length} kategori bulunmaktdır. Maksimum 50 Kategori eklenebilir.
                            </Card.Text>
                            <div className='my-4'><ProgressBar variant="info" animated now={categoryLimit} /></div>

                            <div><Button variant="primary" onClick={handleCategoryClick}>Kategori Listesi</Button></div>

                        </Card.Body>
                    </Card>

                </Col>

                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="img/contacts.png" style={cardImageStyle} />
                    <Card.Body>
                        <Card.Title>Kişiler</Card.Title>
                        <Card.Text>
                            Toplam {contacts.length} Kişi bulunmaktdır. Maksimum 1000 Kişi eklenebilir.
                        </Card.Text>
                        <div className='my-4'><ProgressBar variant="warning" animated now={contactLimit} /></div>
                        <div><Button variant="primary" onClick={handleContactClick}>Kişi Listesi</Button></div>

                    </Card.Body>
                </Card></Col>


                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="img/event.png" style={cardImageStyle} />
                        <Card.Body>
                            <Card.Title>Etkinlikler</Card.Title>
                            <Card.Text>
                                Toplam {contacts.length} Etkinlik bulunmaktdır. Etkinlikler bla bla bla
                            </Card.Text>
                            <div className='my-4'>
                                <ProgressBar variant="warning" animated now={contactLimit} />
                            </div>
                            <div>
                                <Button
                                    variant="primary"
                                    onClick={handleEventClick}>
                                    Etkinlik Listesi
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>




        </Container>
    )
}

export default Home