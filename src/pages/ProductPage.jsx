import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, selectFavorites } from '../slices/favoritesSlice';
import { selectProducts } from '../slices/ProductSlice';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Добавляем хук useNavigate
  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav.id === product?.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const handleBackToHome = () => {
    navigate('/'); // Возвращаемся на главную страницу
  };

  if (!product) {
    return <p>Продукт не найден</p>;
  }

  return (
    <div className={styles.productPage}>
      <img src={product.icon} alt={product.name} className={styles.productImage} />
      <h1 className={styles.productName}>{product.name}</h1>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productDetails}>
        <p>
          <strong>Владелец:</strong> {product.owner || 'Неизвестный владелец'}
        </p>
        <p>
          <strong>Дата публикации:</strong> {product.date || 'Не указана'}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <a href="#" className={styles.productLink}>
          Подробнее
        </a>
        <button onClick={handleFavoriteToggle} className={styles.favoriteButton}>
          {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
        <button onClick={handleBackToHome} className={styles.backButton}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
