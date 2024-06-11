import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5001', // Update with your backend URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export const fetchData = async () => {
    const response = await apiClient.get('/data');
    return response.data;
};
