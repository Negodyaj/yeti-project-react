import React from 'react';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './Header';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>        
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
