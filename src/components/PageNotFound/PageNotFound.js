import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();

  function handleGoBack(e) {
    e.preventDefault()
    navigate(-1);
  }

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <p className="not-found__exit" onClick={handleGoBack}>Назад</p>
    </main>
  )
}

export default PageNotFound;
