import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		product: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.product = [...state.product, action.payload];
			state.quantity += 1;
			state.total = state.total += action.payload.price * action.payload.quantity;
		},
	},
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
