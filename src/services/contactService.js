import axios from "axios"

const API_URL = "http://localhost:9999/contacts"

export const getAllContacts = async () => {
    const response = await axios.get(API_URL)
    return response.data;
}

export const getContactsByCategory = async (categoryId) => {
    const response = await axios.get(`${API_URL}/cat/${categoryId}`)
    return response.data;
}

export const createContact = async (contact) => {
    const response = await axios.post(`${API_URL}/add`, contact)
    return response.data
}

export const deleteContact = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
}

