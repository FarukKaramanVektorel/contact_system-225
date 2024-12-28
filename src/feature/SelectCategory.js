import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {getAllCategories} from "../services/categoryService";

const SelectCategory = ({ value, setData }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };
  return (
    <Form.Select
      aria-label="Kategori Select"
      value={value}
      onChange={(e) => setData(prevData => ({
        ...prevData,
        category: { ...prevData.category, id: e.target.value }
      }))}>
      <option>Kategori Seçiniz</option>
      {categories.map((merve) => (
        <option key={merve.id} value={merve.id}>
          {merve.name}
        </option>
      ))}
    </Form.Select>
  );
};
export default SelectCategory;
