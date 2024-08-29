import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../slices/ProductSlice';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <div className={styles.productList}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} id={product.id} name={product.name} icon={product.icon} />
      ))}
    </div>
  );
};

export default ProductList;
