import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import SortOptions from '../components/SortOptions';
import ProductList from '../components/ProductList';
import styles from './HomePage.module.scss';

const mockProducts = [
  { id: 1, name: 'Продукт 1', description: 'Описание продукта 1', price: 1000, date: '2024-08-01' },
  { id: 2, name: 'Продукт 2', description: 'Описание продукта 2', price: 2000, date: '2024-08-02' },
  { id: 3, name: 'Продукт 3', description: 'Описание продукта 3', price: 3000, date: '2024-08-03' },
  { id: 4, name: 'Продукт 4', description: 'Описание продукта 4', price: 4000, date: '2024-08-04' },
  { id: 5, name: 'Продукт 5', description: 'Описание продукта 5', price: 5000, date: '2024-08-05' },
  { id: 6, name: 'Продукт 6', description: 'Описание продукта 6', price: 6000, date: '2024-08-06' },
];

const Home = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortType, setSortType] = useState('dateDesc');

  useEffect(() => {
    let filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice))
      );
    });

    if (sortType === 'dateDesc') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === 'dateAsc') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortType === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, minPrice, maxPrice, sortType, products]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setSortType('dateDesc');
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={styles.homePage}>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onClearSearch={handleClearSearch}
      />
      <div className={styles.main}>
        <aside className={styles.filtering}>
          <Filters
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onReset={handleResetFilters}
          />
        </aside>
        <aside className={styles.products}>
          <ProductList products={filteredProducts} />
        </aside>
        <aside className={styles.sorting}>
          <SortOptions sortType={sortType} onSortChange={setSortType} />
        </aside>
      </div>
    </div>
  );
};

export default Home;
