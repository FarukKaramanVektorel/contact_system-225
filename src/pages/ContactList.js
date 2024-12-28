import React, { useEffect, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import DataTable from "../components/DataTable";
import {contactService, deleteContact, getAllContacts} from "../services/contactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  const fetchContacts = async () => {
    const data = await getAllContacts()
    setContacts(data);
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  const handleDelete = async (id) => {
    if (window.confirm("Kişi silinecek, eminmisiniz?")) {
      await deleteContact(id)
      fetchContacts();
    }
  }

  const handleGoToContactAdd = () => {
    navigate("/add_contacts")
  }

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Ad', align: 'left' },
    { field: 'lastname', headerName: 'Soyad', align: 'left' },
    { field: 'phone', headerName: 'Telefon', align: 'left', valueGetter: (row) => row.infoDto.phone },

  ]

  const actionButtons = (row) => (
    <Button variant="danger" onClick={()=>handleDelete(row.id)}>
      <FontAwesomeIcon icon={faCircleXmark} className="me-2" />
      Sil</Button>
  )

  return (
    <Container>
      <Row className="my-4">
        <Col><h1>Kişiler</h1></Col>
        <Col><Button variant="success" onClick={handleGoToContactAdd}>
          <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
          Kişi Ekle</Button></Col>
      </Row>
      <DataTable
        data={contacts}
        columns={columns}
        actions={actionButtons}
      />


    </Container>

  );
};

export default ContactList;
