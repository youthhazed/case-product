import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';

const mockProducts = [
  {
    id: 1,
    name: 'Cloud Service',
    description: 'Облачный сервис',
    owner: 'Компания 1',
    date: '2024-08-01',
  },
  {
    id: 2,
    name: 'Продукт 2',
    description: 'Описание продукта 2',
    owner: 'Компания 2',
    date: '2024-08-02',
  },
  {
    id: 3,
    name: 'Продукт 3',
    description: 'Описание продукта 3',
    owner: 'Компания 3',
    date: '2024-08-03',
  },
  {
    id: 4,
    name: 'Продукт 4',
    description: 'Описание продукта 4',
    owner: 'Компания 4',
    date: '2024-08-04',
  },
  {
    id: 5,
    name: 'Продукт 5',
    description: 'Описание продукта 5',
    owner: 'Компания 5',
    date: '2024-08-05',
  },
  {
    id: 6,
    name: 'Продукт 6',
    description: 'Описание продукта 6',
    owner: 'Компания 6',
    date: '2024-08-06',
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  if (!product) {
    return <p>Продукт не найден</p>;
  }

  return (
    <div className={styles.productPage}>
      <h1 className={styles.productName}>{product.name}</h1>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productDetails}>
        <p>
          <strong>Владелец:</strong> {product.owner}
        </p>
        <p>
          <strong>Дата публикации:</strong> {product.date}
        </p>
      </div>
      <a href="#" className={styles.productLink}>
        Подробнее
      </a>
      <button className={styles.favoriteButton}>Добавить в избранное</button>
    </div>
  );
};

export default ProductPage;
