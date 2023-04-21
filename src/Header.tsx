import "./Header.scss";
import logo from './logo.svg';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Yeti logo" />
        <nav>
          <a href="#" className="nav-link">
            О МАГАЗИНЕ
          </a>
          <a href="catalog.html" className="nav-link">
            КАТАЛОГ
          </a>
          <a href="#" className="nav-link">
            КОНТАКТЫ
          </a>
          <a href="#" className="nav-link">
            ЛИЧНЫЙ КАБИНЕТ
          </a>
          <a href="#" className="nav-link">
            КОРЗИНА (0)
          </a>
        </nav>
        <button className="burger-menu mobile-only">...</button>
      </div>
    </header>
  );
};
