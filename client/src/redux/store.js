import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';
import clientReducer from './slices/clientSlice';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: ['productReducer', 'clientReducer'],
};

const rootReducer = combineReducers({ cart: cartReducer, user: userReducer, productReducer, clientReducer });

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
