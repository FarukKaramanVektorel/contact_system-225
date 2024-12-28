import React, { useEffect, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBarsProgress, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import DataTable from "../components/DataTable";

import {deleteCategory, getAllCategories} from "../services/categoryService";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Kategori silinecek, eminmisiniz?")) {
      await deleteCategory(id)
      fetchCategories();
    }

  };
  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`)
  }
  const handleGoToCategoryAdd = () => {
    navigate("/add_category")
  }

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Kategori Adı', align: 'left' },

  ]
  const actionButtons = (row) => (
    <Row>
      <Col>
        <Button variant="danger"
          onClick={() => handleDelete(row.id)}>
          <FontAwesomeIcon icon={faCircleXmark} className="me-2" />
          Sil</Button>
      </Col>
      <Col>
        <Button variant="success"
          onClick={() => handleCategoryClick(row.id)}>
          <FontAwesomeIcon icon={faBarsProgress} className="me-2" />
          Detay</Button>
      </Col>
    </Row>
 )
  return (
    <Container>
      <Row className="my-4">
        <Col><h1>Kategoriler</h1></Col>
        <Col><Button variant="success" onClick={handleGoToCategoryAdd}>
          <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
          Kategori Ekle</Button></Col>
      </Row>
      <DataTable
        data={categories}
        columns={columns}
        actions={actionButtons}
      />
    </Container>
  );
};

export default CategoryList;
