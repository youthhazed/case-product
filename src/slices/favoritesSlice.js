import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  searchTerm: '', // добавляем состояние для поискового запроса
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((product) => product.id !== action.payload.id);
    },
    setFavoritesSearchTerm(state, action) {
      // добавляем экшен для установки поискового запроса
      state.searchTerm = action.payload;
    },
    clearFavoritesSearchTerm(state) {
      // добавляем экшен для очистки поискового запроса
      state.searchTerm = '';
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFavoritesSearchTerm,
  clearFavoritesSearchTerm,
} = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.favorites;

export const selectFilteredFavorites = (state) =>
  state.favorites.favorites.filter((product) =>
    product.name.toLowerCase().includes(state.favorites.searchTerm.toLowerCase()),
  );

export const selectFavoritesSearchTerm = (state) => state.favorites.searchTerm;

export default favoritesSlice.reducer;
