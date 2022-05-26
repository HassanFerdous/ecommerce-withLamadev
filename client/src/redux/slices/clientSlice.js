import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
	name: 'clients',
	initialState: {
		clients: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		getClientsStart: (state) => {
			state.isFetching = true;
		},

		getClientsSuccess: (state, action) => {
			state.clients = action.payload;
			state.isFetching = false;
		},
		getClientsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { getClientsStart, getClientsSuccess, getClientsFailure } = clientSlice.actions;
export default clientSlice.reducer;
