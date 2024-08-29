import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../slices/favoritesSlice';
import ProductCard from '../components/ProductCard';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={styles.favoritesPage}>
      <h1>Мои избранные товары</h1>
      {favorites.length === 0 ? (
        <p>У вас нет избранных товаров.</p>
      ) : (
        <div className={styles.productList}>
          {favorites.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} icon={product.icon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
