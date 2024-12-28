import axiosInstance from './axiosInstance';

const API_URL = "/events";

export const getAllEvents = async () => {
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Etkinlik listesi alınamadı:', error);
        throw error;
    }
}

export const getEventById = async (id) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Etkinlik bulunamadı:', error);
        throw error;
    }
}

export const createEvent = async (event) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/add`, event);
        return response.data;
    } catch (error) {
        console.error('Etkinlik oluşturulamadı:', error);
        throw error;
    }
}

export const updateEvent = async (event) => {
    try {
        const response = await axiosInstance.put(`${API_URL}/update`, event);
        return response.data;
    } catch (error) {
        console.error('Etkinlik güncellenemedi:', error);
        throw error;
    }
}

export const deleteEvent = async (id) => {
    try {
        await axiosInstance.delete(`${API_URL}/${id}`);
        return true;
    } catch (error) {
        console.error('Etkinlik silinemedi:', error);
        throw error;
    }
}