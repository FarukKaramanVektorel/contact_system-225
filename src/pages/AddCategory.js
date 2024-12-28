import React, { useState } from "react";
import { createCategory } from "../services/categoryService";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//rafce

const AddCategory = () => {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createCategory({ name });
      setName("");
      setSaved("Kategori Başarı ile Eklendi");
      setTimeout(() => {
        navigate("/categories")
      }, 1000)

    } catch (error) {
      setSaved("Kategori Eklenemedi");
    }
  };


  return (
    <Container>
      <h1 className="my-4">Kategori Ekle</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Kategori Adı: </Form.Label>
          <Form.Control type="text" value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Kategori Adı"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ekle
        </Button>
      </Form>
      {saved && <Alert variant="primary">
        {saved}</Alert>}
    </Container>
  );
};

export default AddCategory;
