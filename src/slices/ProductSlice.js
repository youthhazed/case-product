import { createSlice } from '@reduxjs/toolkit';

import bankLogo from '../assets/bank-logo.svg';
import compLogo from '../assets/comp.svg';
import devopsLogo from '../assets/devops.svg';
import engineLogo from '../assets/engine.svg';
import testLogo from '../assets/test.svg';
import vksLogo from '../assets/vks-logo.svg';

// Изначальное состояние с продуктами
const initialState = {
  products: [
    {
      id: 1,
      name: 'ВКС для слабослышащих',
      shortDescription: 'Краткое описание ВКС',
      fullDescription:
        'Полное описание ВКС для слабослышащих. Этот продукт предназначен для улучшения коммуникации для людей с ограниченными возможностями слуха.',
      contacts: 'support@vks.example.com',
      serviceLink: 'https://example.com/vks',
      icon: bankLogo,
    },
    {
      id: 2,
      name: 'Клубная карта',
      shortDescription:
        'Клубная карта - это сервис для управления членством в клубе. Основное назначение - регистрация членов клуба, установление уровня доступа к различным сервисам.',
      fullDescription:
        'Полное описание клубной карты, включающей в себя множество бонусов и скидок для постоянных клиентов.',
      contacts: 'support@clubcard.example.com',
      serviceLink: 'https://example.com/club',
      icon: compLogo,
    },
    {
      id: 3,
      name: 'Техрадар',
      shortDescription:
        'Техрадар - это инструмент, который наглядно показывает, какие технологии и инструменты используются в компании',
      fullDescription:
        'Полное описание Техрадара, новейшего сервиса для отслеживания технологических трендов и анализа рынка.',
      contacts: 'support@techradar.example.com',
      serviceLink: 'https://example.com/techradar',
      icon: devopsLogo,
    },
    {
      id: 4,
      name: 'Микросервис для расчета графика платежей',
      shortDescription:
        'Микросервис предназначен для расчета графикаплатежей по кредиту физическим лицам',
      fullDescription:
        'Полное описание микросервиса, который позволяет рассчитывать график платежей с высокой точностью и гибкостью.',
      contacts: 'support@paymentschedule.example.com',
      serviceLink: 'https://example.com/paymentschedule',
      icon: engineLogo,
    },
    {
      id: 5,
      name: 'Сервис p2p-review',
      shortDescription:
        'Сервис p2p-review обеспечивает возможность организации встреч в формате 1:1 для взаимной помощи и оценки.',
      fullDescription:
        'Полное описание сервиса p2p-review, предназначенного для обмена отзывами между пользователями и экспертами.',
      contacts: 'support@p2preview.example.com',
      serviceLink: 'https://example.com/p2preview',
      icon: testLogo,
    },
    {
      id: 6,
      name: 'Сервис внутренней валюты',
      shortDescription: 'Краткое описание внутренней валюты',
      fullDescription:
        'Полное описание сервиса внутренней валюты, который позволяет управлять внутренними расчетами и валютами в рамках компании.',
      contacts: 'support@internalcurrency.example.com',
      serviceLink: 'https://example.com/internalcurrency',
      icon: vksLogo,
    },
    {
      id: 7,
      name: 'Сервис управления командами',
      shortDescription: 'Краткое описание управления командами',
      fullDescription:
        'Полное описание сервиса управления командами, который помогает координировать работу в команде и распределять задачи.',
      contacts: 'support@teammanagement.example.com',
      serviceLink: 'https://example.com/teammanagement',
      icon: vksLogo,
    },
    {
      id: 8,
      name: 'Сервис управления товарами',
      shortDescription: 'Краткое описание управления товарами',
      fullDescription:
        'Полное описание сервиса управления товарами, предназначенного для эффективного контроля за движением товаров на складе и в магазине.',
      contacts: 'support@productmanagement.example.com',
      serviceLink: 'https://example.com/productmanagement',
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
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: state.products.length + 1, // Генерация нового уникального id
      };
      state.products.push(newProduct);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
      }
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { setSearchTerm, clearSearchTerm, addProduct, updateProduct, deleteProduct } =
  productSlice.actions;

// Селекторы для получения данных из состояния
export const selectProducts = (state) => state.products.products;

export const selectFilteredProducts = (state) =>
  state.products.products.filter((product) =>
    product.name.toLowerCase().includes(state.products.searchTerm.toLowerCase()),
  );

export const selectSearchTerm = (state) => state.products.searchTerm;

export default productSlice.reducer;
