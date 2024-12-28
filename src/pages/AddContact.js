import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import SelectCategory from "../feature/SelectCategory";
import {contactService, createContact} from "../services/contactService";

const initialState = {
  "name": "",
  "lastname": "",
  "status": "",
  "category": {
    "id": null
  },
  "info": {
    "phone": "",
    "birthDate": "",
    "gender": "",
    "address": "",
    "description": "",
    "email": ""
  }
}
const AddContact = () => {
  const [data, setData] = useState(initialState)
  const [saved, setSaved] = useState(null)
  const [gender, setGender] = useState(null)

  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      info: { ...prevData.info, gender: gender }
    }))
  }, [gender])
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }
  const handleSave = async (e) => {
    e.preventDefault();
    await createContact(data);
    setData(initialState)
    setSaved("Kişi Başarı ile Eklendi");
  }
  return (
    <>
      <Container>

        <Form onSubmit={handleSave}>
          <Row className="mt-3">
            <Col>
              <h2>Kişi Ekleme Sayfası</h2>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputName" >İsim</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.name}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  name: e.target.value
                }))}
                type="text"
                id="inputName"
                required />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputLastName">Soyisim</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.lastname}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  lastname: e.target.value
                }))}
                type="text"
                id="inputLastName"
                required />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="selectCategory">Kategori</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <SelectCategory
                value={data?.category?.id}
                setData={setData}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputPhone">Telefon</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.info?.phone}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  info: { ...prevData.info, phone: e.target.value }
                }))}
                title="Telefon Numarası 10 Haneli Olmalıdır!!!"
                placeholder="Örn: 5005005050"
                pattern="^[0-9]{10}$"
                type="tel"
                id="inputPhone"
                required />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputBirthDate">Doğum Tarihi</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.info?.birthDate}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  info: { ...prevData.info, birthDate: e.target.value }
                }))}
                type="date"
                id="inputBirthDate" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="radioGender">Cinsiyet</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Check
                inline
                label="Erkek"
                name="group1"
                type={"radio"}
                id="genderMale"
                onChange={handleGenderChange}
                value={1}

              />
              <Form.Check
                inline
                label="Kadın"
                name="group1"
                type={"radio"}
                id="genderFemale"
                onChange={handleGenderChange}
                value={0}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputAdres">Adres</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.info?.address}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  info: { ...prevData.info, address: e.target.value }
                }))}
                as="textarea"
                id="inputAdres" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputDescription">Açıklama</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.info?.description}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  info: { ...prevData.info, description: e.target.value }
                }))}
                as="textarea"
                id="inputDescription" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={2} lg={2}>
              <Form.Label htmlFor="inputEmail">E-Posta</Form.Label>
            </Col>
            <Col xs={10} lg={4}>
              <Form.Control
                value={data?.info?.email}
                onChange={(e) => setData(prevData => ({
                  ...prevData,
                  info: { ...prevData.info, email: e.target.value }
                }))}
                type="email"
                id="inputEmail" />
            </Col>
          </Row>
          <Row className="mt-2 text-end">
            <Col xs={2} lg={2}></Col>
            <Col xs={10} lg={4}>
              <Button variant="primary" type="submit">Kaydet</Button>
            </Col>
          </Row>
        </Form>
        {saved && <Alert variant="primary">
          {saved}
        </Alert>}
      </Container>
    </>
  );
};

export default AddContact;
