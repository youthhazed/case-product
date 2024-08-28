import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import styles from './SearchInput.module.scss';

const SearchInput = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <div className={styles.root}>
      <IoIosSearch className={styles.search} />
      <input
        type="text"
        className={styles.input}
        placeholder="Поиск продуктов..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <IoCloseOutline className={styles.close} onClick={onClearSearch} />
    </div>
  );
};

export default SearchInput;
