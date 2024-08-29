import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRightLong } from 'react-icons/fa6';
import styles from './ProductCard.module.scss';

const ProductCard = ({ id, name, icon }) => {
  console.log(id);
  console.log(icon);
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none' }} className={styles.card}>
      <img className={styles.productLogo} src={icon} alt="" />
      <div>
        <h3 className={styles.productName}>{name}</h3>
      </div>
      <FaArrowRightLong className={styles.arrow} />
    </Link>
  );
};

export default ProductCard;
