import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const UserProfilePage = () => {
  return (
    <div>
      <Header />
      <h1>Личный кабинет</h1>
      <Link to="/add">
        <button>Добавить новый продукт</button>
      </Link>
      {/* Здесь также можно отобразить список продуктов пользователя */}
    </div>
  );
};

export default UserProfilePage;
