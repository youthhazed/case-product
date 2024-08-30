import React, { useState } from 'react';
import styles from './ProductForm.module.scss';

const ProductForm = ({ onSubmit, onCancel, initialData = {}, isEditMode = false }) => {
  const [productData, setProductData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Валидация данных и вызов onSubmit
    const validationErrors = validateForm(productData);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(productData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name || data.name.length < 3) {
      errors.name = 'Название должно содержать не менее 3 символов';
    }
    if (!data.shortDescription || data.shortDescription.length < 10) {
      errors.shortDescription = 'Краткое описание должно содержать не менее 10 символов';
    }
    if (!data.fullDescription || data.fullDescription.length < 50) {
      errors.fullDescription = 'Полное описание должно содержать не менее 50 символов';
    }
    // Добавьте другие проверки здесь
    return errors;
  };

  return (
    <form className={styles.productForm} onSubmit={handleSubmit}>
      <h2>{isEditMode ? 'Редактировать продукт' : 'Создать продукт'}</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Название продукта</label>
        <input
          type="text"
          id="name"
          name="name"
          value={productData.name || ''}
          onChange={handleChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="shortDescription">Краткое описание</label>
        <textarea
          id="shortDescription"
          name="shortDescription"
          value={productData.shortDescription || ''}
          onChange={handleChange}
        />
        {errors.shortDescription && <p className={styles.error}>{errors.shortDescription}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="fullDescription">Полное описание</label>
        <textarea
          id="fullDescription"
          name="fullDescription"
          value={productData.fullDescription || ''}
          onChange={handleChange}
        />
        {errors.fullDescription && <p className={styles.error}>{errors.fullDescription}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contacts">Контакты</label>
        <input
          type="text"
          id="contacts"
          name="contacts"
          value={productData.contacts || ''}
          onChange={handleChange}
        />
        {errors.contacts && <p className={styles.error}>{errors.contacts}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="serviceLink">Ссылка на сервис</label>
        <input
          type="url"
          id="serviceLink"
          name="serviceLink"
          value={productData.serviceLink || ''}
          onChange={handleChange}
        />
        {errors.serviceLink && <p className={styles.error}>{errors.serviceLink}</p>}
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.submitButton}>
          {isEditMode ? 'Сохранить изменения' : 'Создать продукт'}
        </button>
        <button type="button" onClick={onCancel} className={styles.cancelButton}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
