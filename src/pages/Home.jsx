import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import {
  setSearchTerm,
  clearSearchTerm,
  selectFilteredProducts,
  selectSearchTerm,
} from '../slices/ProductSlice';
import styles from './HomePage.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const searchTerm = useSelector(selectSearchTerm);

  const handleClearSearch = () => {
    dispatch(clearSearchTerm());
  };

  const handleSearchChange = (term) => {
    dispatch(setSearchTerm(term));
  };

  useEffect(() => {
    // Дополнительная логика при изменении searchTerm или filteredProducts, если потребуется
  }, [searchTerm, filteredProducts]);

  return (
    <div className={styles.homePage}>
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
      <div className={styles.main}>
        <aside className={styles.products}>
          <ProductList products={filteredProducts} />
        </aside>
      </div>
    </div>
  );
};

export default Home;
