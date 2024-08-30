import React, { useState } from 'react';
import styles from './EditPage.module.scss';

const EditPage = ({ product, onSubmit, onCancel, onDelete }) => {
  const [productData, setProductData] = useState(
    product || {
      name: '',
      shortDescription: '',
      fullDescription: '',
      contacts: '',
      serviceLink: '',
    },
  );

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
    return errors;
  };

  return (
    <div className={styles.editPage}>
      <h2>Редактировать продукт</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Название продукта</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="shortDescription">Краткое описание</label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={productData.shortDescription}
            onChange={handleChange}
          />
          {errors.shortDescription && <p className={styles.error}>{errors.shortDescription}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fullDescription">Полное описание</label>
          <textarea
            id="fullDescription"
            name="fullDescription"
            value={productData.fullDescription}
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
            value={productData.contacts}
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
            value={productData.serviceLink}
            onChange={handleChange}
          />
          {errors.serviceLink && <p className={styles.error}>{errors.serviceLink}</p>}
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Сохранить изменения
          </button>
          <button type="button" onClick={onCancel} className={styles.cancelButton}>
            Отмена
          </button>
          <button type="button" onClick={onDelete} className={styles.deleteButton}>
            Удалить продукт
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
