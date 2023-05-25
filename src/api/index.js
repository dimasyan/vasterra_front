import axios from "axios";

const BASE_URL = 'http://localhost:8000/api';

export const getNewUser = async (userData) => {
    try {
        const response = await axios.get(`${BASE_URL}/new-user`, userData);
        return response.data.id;
    } catch (error) {
        console.error(error);
    }
};

export const addRecord = async (recordData) => {
    try {
        const response = await axios.post(`${BASE_URL}/records`, recordData);
        return response.data.id;
    } catch (error) {
        console.error(error);
    }
};

export const getUserRecords = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/records`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
