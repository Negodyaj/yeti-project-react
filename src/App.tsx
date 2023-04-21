import React from 'react';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
}

export default App;
