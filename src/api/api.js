// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL if needed

// Function to get all clients
export const getClients = async () => {
    const response = await axios.get(`${API_URL}/clients`);
    return response.data;
};

// Function to create a new client
export const createClient = async (clientData) => {
    const response = await axios.post(`${API_URL}/clients`, clientData);
    return response.data;
};

// Function to get all cards
export const getCards = async () => {
    const response = await axios.get(`${API_URL}/cards`);
    return response.data;
};

// Function to create a new card
export const createCard = async (cardData) => {
    const response = await axios.post(`${API_URL}/cards`, cardData);
    return response.data;
};