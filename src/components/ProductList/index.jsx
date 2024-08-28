import React from 'react';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
