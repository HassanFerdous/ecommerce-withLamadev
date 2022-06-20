import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		product: [],
	},
	reducers: {
		//ADD ITEM
		addItemToCart: (state, { payload }) => {
			console.log(payload);
			let existedProduct = state.product.find((product) => product._id === payload._id);
			if (existedProduct) {
				return {
					...state,
					product: state.product.map((product) =>
						product._id === payload._id
							? {
									...product,
									quantity: product.quantity + payload.quantity,
							  }
							: product
					),
				};
			}
			state.product.push({ ...payload, quantity: payload.quantity });
		},

		//REMOVE ITEM
		removeItemFromCart: (state, { payload: _id }) => {
			return { ...state, product: state.product.filter((product) => product._id !== _id) };
		},

		//INCREASE QUANTITY
		increaseQuantity: (state, { payload: _id }) => {
			return {
				...state,
				product: state.product.map(
					(product) => product._id === _id && { ...product, quantity: product.quantity + 1 }
				),
			};
		},

		//DECREASE QUANTITY
		decreaseQuantity: (state, { payload: _id }) => {
			let existedProduct = state.product.find((product) => product._id === _id);

			if (existedProduct && existedProduct.quantity > 1) {
				return {
					...state,
					product: state.product.map(
						(product) => product._id === _id && { ...product, quantity: product.quantity - 1 }
					),
				};
			}

			return { ...state, product: state.product.filter((product) => product._id !== _id) };
		},
	},
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
