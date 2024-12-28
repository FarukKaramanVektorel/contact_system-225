// src/services/axios-instance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9999',
    headers: {
        'Content-Type': 'application/json'
    },
    auth: {
        username: 'admin',
        password: '1234'
    },
    withCredentials: true
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.log('Oturum hatası');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;