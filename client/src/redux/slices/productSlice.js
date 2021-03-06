import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		getProductsStart: (state) => {
			state.isFetching = true;
		},

		getProductsSuccess: (state, action) => {
			state.products = action.payload;
			state.isFetching = false;
		},
		getProductsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } = productSlice.actions;
export default productSlice.reducer;
