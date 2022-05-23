import { publicRequest } from '../requestMethod';
import {
	loginFailure,
	loginStart,
	loginSuccess,
	registerStart,
	registerSuccess,
	registerFailure,
} from './slices/userSlice';

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
