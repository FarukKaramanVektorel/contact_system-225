import axios from "axios";

const API_URL = "http://localhost:9999/categories";

export const getAllCategories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCategory=async (category)=>{
    const response=await axios.post(`${API_URL}/add`,category)
    return response.data
}

export const deleteCategory=async (id)=>{
    const response=await axios.delete(`${API_URL}/${id}`)
    return response.data
}
