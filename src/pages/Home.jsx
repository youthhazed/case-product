import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import styles from './HomePage.module.scss';

import bankLogo from '../../src/assets/bank-logo.svg';
import compLogo from '../../src/assets/comp.svg';
import devopsLogo from '../../src/assets/devops.svg';
import engineLogo from '../../src/assets/engine.svg';
import testLogo from '../../src/assets/test.svg';
import vksLogo from '../../src/assets/vks-logo.svg';

const mockProducts = [
  {
    id: 1,
    name: 'ВКС для слабослышащих',
    icon: bankLogo,
  },
  {
    id: 2,
    name: 'Клубная карта',
    icon: compLogo,
  },
  { id: 3, name: 'Техрадар', icon: devopsLogo },
  {
    id: 4,
    name: 'Микросервис для рассчета графика платежей',
    icon: engineLogo,
  },
  {
    id: 5,
    name: 'Сервис p2p-review',
    icon: testLogo,
  },
  {
    id: 6,
    name: 'Сервис внутренней валюты',
    icon: vksLogo,
  },
  {
    id: 7,
    name: 'Сервис управления командами',
    icon: vksLogo,
  },
  {
    id: 8,
    name: 'Сервис управления товарами',
    icon: vksLogo,
  },
];

const Home = () => {
  const [products] = useState(mockProducts); // products больше не изменяются
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    let filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className={styles.homePage}>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
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
