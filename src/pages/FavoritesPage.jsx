import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import {
  selectFilteredFavorites,
  setFavoritesSearchTerm,
  clearFavoritesSearchTerm,
  selectFavoritesSearchTerm,
} from '../slices/favoritesSlice';
import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFilteredFavorites);
  const searchTerm = useSelector(selectFavoritesSearchTerm);

  const handleClearSearch = () => {
    dispatch(clearFavoritesSearchTerm());
  };

  const handleSearchChange = (term) => {
    dispatch(setFavoritesSearchTerm(term));
  };

  return (
    <div className={styles.favoritesPage}>
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
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
