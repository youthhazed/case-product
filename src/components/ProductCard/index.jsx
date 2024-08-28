import React from 'react';
import styles from './ProductCard.module.scss';

const ProductCard = ({ name, description, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.productWrapper}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{price} ₽</p>
      </div>
    </div>
  );
};

export default ProductCard;
