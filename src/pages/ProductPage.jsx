import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, selectFavorites } from '../slices/favoritesSlice';
import { selectProducts, deleteProduct } from '../slices/ProductSlice';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav.id === product?.id);
  const navigate = useNavigate();

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  const handleDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    navigate('/'); // Возвращаемся на главную страницу после удаления продукта
  };

  if (!product) {
    return <p>Продукт не найден</p>;
  }

  return (
    <div className={styles.productPage}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={product.icon} alt={product.name} className={styles.productImage} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productDescription}>{product.shortDescription}</p>
          <p className={styles.productFullDescription}>{product.fullDescription}</p>
          <p>
            <strong>Владелец:</strong> {product.contacts}
          </p>
          <p>
            <strong>Ссылка на сервис:</strong>{' '}
            <a href={product.serviceLink}>{product.serviceLink}</a>
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={handleFavoriteToggle} className={styles.favoriteButton}>
              {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
            <button onClick={() => navigate(`/edit/${product.id}`)} className={styles.editButton}>
              Редактировать продукт
            </button>
            <button onClick={handleDelete} className={styles.deleteButton}>
              Удалить продукт
            </button>
            <button onClick={() => navigate('/')} className={styles.backButton}>
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
