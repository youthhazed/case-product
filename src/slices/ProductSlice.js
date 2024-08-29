import { createSlice } from '@reduxjs/toolkit';

// Импорты SVG-иконок
import bankLogo from '../assets/bank-logo.svg';
import compLogo from '../assets/comp.svg';
import devopsLogo from '../assets/devops.svg';
import engineLogo from '../assets/engine.svg';
import testLogo from '../assets/test.svg';
import vksLogo from '../assets/vks-logo.svg';

// Изначальное состояние
const initialState = {
  products: [
    {
      id: 1,
      name: 'ВКС для слабослышащих',
      icon: bankLogo,
    },
    {
      id: 2,
      name: 'Клубная карта',
      icon: compLogo,
    },
    { id: 3, name: 'Техрадар', icon: devopsLogo },
    {
      id: 4,
      name: 'Микросервис для рассчета графика платежей',
      icon: engineLogo,
    },
    {
      id: 5,
      name: 'Сервис p2p-review',
      icon: testLogo,
    },
    {
      id: 6,
      name: 'Сервис внутренней валюты',
      icon: vksLogo,
    },
    {
      id: 7,
      name: 'Сервис управления командами',
      icon: vksLogo,
    },
    {
      id: 8,
      name: 'Сервис управления товарами',
      icon: vksLogo,
    },
  ],
  searchTerm: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
});

export const { setSearchTerm, clearSearchTerm } = productSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) =>
  state.products.products.filter((product) =>
    product.name.toLowerCase().includes(state.products.searchTerm.toLowerCase()),
  );
export const selectSearchTerm = (state) => state.products.searchTerm;

export default productSlice.reducer;
