import './App.scss';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
