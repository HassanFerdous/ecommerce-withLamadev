import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser?.access_token;
// const TOKEN = 'sdfkd';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		access_token: `Bearer ${TOKEN}`,
	},
});
