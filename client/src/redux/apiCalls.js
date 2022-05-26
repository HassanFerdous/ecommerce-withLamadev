import { publicRequest, userRequest } from '../requestMethod';
import { getProductsFailure, getProductsStart, getProductsSuccess } from './slices/productSlice';
import { getClientsStart, getClientsSuccess, getClientsFailure } from './slices/clientSlice';
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerStart,
	registerSuccess,
	registerFailure,
} from './slices/userSlice';

//login
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		let res = await publicRequest.post('/auth/signin/', user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
		console.log(error);
	}
};

//register
export const register = async (dispatch, userData) => {
	dispatch(registerStart());
	try {
		let user = await publicRequest.post('/auth/register', userData);
		dispatch(registerSuccess(user));
	} catch (error) {
		dispatch(registerFailure());
		console.log(error);
	}
};

//fetch-products
export const getProducts = async (dispatch) => {
	dispatch(getProductsStart());
	try {
		let res = await userRequest.get('/products/');
		dispatch(getProductsSuccess(res.data));
	} catch (error) {
		console.log(error);
		dispatch(getProductsFailure());
	}
};

//fetch-clients
export const getClients = async (dispatch) => {
	dispatch(getClientsStart());
	try {
		let res = await userRequest.get('/users/all');
		dispatch(getClientsSuccess(res.data));
	} catch (error) {
		console.log(error);
		dispatch(getClientsFailure());
	}
};
