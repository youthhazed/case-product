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
          icon={product.icon}
        />
      ))}
    </div>
  );
};

export default ProductList;
