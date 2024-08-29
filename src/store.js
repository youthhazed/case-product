import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    favorites: favoritesReducer,
  },
});
