
import axiosInstance from './axiosInstance';

const API_URL = "/contacts";

export const getAllContacts = async () => {
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Kişi listesi alınamadı:', error);
        throw error;
    }
}
export const getContactById = async (id) => {
    try {
        const response = await axiosInstance.get(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        console.error("Kişi detayları alınamadı:", error);
        throw error;
    }
};

export const getContactsByCategory = async (categoryId) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/cat/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Kategoriye göre kişiler alınamadı:', error);
        throw error;
    }
}

export const createContact = async (contact) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/add`, contact);
        return response.data;
    } catch (error) {
        console.error('Kişi oluşturulamadı:', error);
        throw error;
    }
}

export const deleteContact = async (id) => {
    try {
        const response = await axiosInstance.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Kişi silinemedi:', error);
        throw error;
    }
}