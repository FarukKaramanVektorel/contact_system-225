
import axiosInstance from './axiosInstance';

const API_URL = "/categories";

export const getAllCategories = async () => {
    try {
        const response = await axiosInstance.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Kategori listesi alınamadı:', error);
        throw error;
    }
}

export const createCategory = async (category) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/add`, category);
        return response.data;
    } catch (error) {
        console.error('Kategori oluşturulamadı:', error);
        throw error;
    }
}

export const deleteCategory = async (id) => {
    try {
        const response = await axiosInstance.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Kategori silinemedi:', error);
        throw error;
    }
}

export const getCategoryById = async (id) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Kategori bulunamadı:', error);
        throw error;
    }
}

export const updateCategory = async (category) => {
    try {
        const response = await axiosInstance.put(`${API_URL}/update`, category);
        return response.data;
    } catch (error) {
        console.error('Kategori güncellenemedi:', error);
        throw error;
    }
}