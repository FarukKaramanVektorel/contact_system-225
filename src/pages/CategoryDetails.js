import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getContactsByCategory } from '../services/contactService';
import { Container, Table } from 'react-bootstrap';

const CategoryDetails = () => {
    const { categoryId } = useParams();
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        if (categoryId) {
            fetchContacts();
        }
    }, [categoryId])


    const fetchContacts = async () => {
        const data = await getContactsByCategory(categoryId);
        setContacts(data);

    }

    return (
        <Container>
            <h1 className='my-4'>Kategoriye Ait Kişiler</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Adı</th>
                        <th>Soyadı</th>
                        <th>Telefon</th>

                    </tr>
                </thead>
                <tbody>
                    {contacts?.map((contact, index) => (
                        <tr key={contact.id}>
                            <td>{index + 1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.lastname}</td>
                            <td>{contact.info.phone}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default CategoryDetails