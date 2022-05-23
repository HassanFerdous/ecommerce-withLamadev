import { publicRequest } from '../requestMethod';
import { loginFailure, loginStart, loginSuccess } from './slices/userSlice';

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
