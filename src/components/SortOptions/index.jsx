import React from 'react';
import styles from './SortOptions.module.scss';

const SortOptions = ({ sortType, onSortChange }) => {
  return (
    <div className={styles.sortOptions}>
      <label>Сортировать по:</label>
      <select value={sortType} onChange={(e) => onSortChange(e.target.value)}>
        <option value="dateAsc">Дате (по возрастанию)</option>
        <option value="dateDesc">Дате (по убыванию)</option>
      </select>
    </div>
  );
};

export default SortOptions;
