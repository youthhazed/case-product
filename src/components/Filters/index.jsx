import React from 'react';
import styles from './Filters.module.scss';

const Filters = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange, onReset }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <label>Организация</label>
        <select>
          <option>Все</option>
          <option>Организация 1</option>
          <option>Организация 2</option>
        </select>
      </div>
      <div className={styles.priceFilter}>
        <p className={styles.title}>Цена</p>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="от"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
          />
          <input
            type="text"
            placeholder="до"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.resetButton} onClick={onReset}>
        Сбросить
      </button>
    </div>
  );
};

export default Filters;
