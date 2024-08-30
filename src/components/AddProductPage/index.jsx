import React from 'react';
import ProductForm from '../ProductForm/';
import Header from '../Header';

const AddProductPage = () => {
  return (
    <div>
      <Header />
      <h1>Добавить новый продукт</h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;
