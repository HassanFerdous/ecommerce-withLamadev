import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjgwYWMwMDgwNzMzYzhhZTkxZDI5ZGQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTI3NzI2NTAsImV4cCI6MTY1Mjk0NTQ1MH0.tzBAdK-wNrR5Z-qdaLZBYCU50Wew0luTCCih1SMeqTU';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		access_token: `Bearer ${TOKEN}`,
	},
});
