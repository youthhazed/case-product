import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/logo-header.svg';
import styles from './Header.module.scss';

import SearchInput from '../SearchInput';

const Header = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoSvg} alt="Logo" />
          <div>
            <h1>Т1-Холдинг</h1>
            <p>Каталог IT продуктов</p>
          </div>
        </div>
        <SearchInput
          className={styles.search}
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onClearSearch={onClearSearch}
        />
        <div className={styles.authButton}>
          <Link to="/favorites">
            <button>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                  stroke="#00bcff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 17C15 14.2386 12.7614 12 10 12H8C5.23858 12 3 14.2386 3 17"
                  stroke="#00bcff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Мои продукты
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
