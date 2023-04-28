import { Link } from "react-router-dom";
import "./Header.scss";
import logo from './logo.svg';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Yeti logo" />
        <nav>
          <Link to="/" className="nav-link">
            О МАГАЗИНЕ
          </Link>
          <Link to="/catalog" className="nav-link">
            КАТАЛОГ
          </Link>
          <Link to="/" className="nav-link">
            КОНТАКТЫ
          </Link>
          <Link to="/login" className="nav-link">
            ЛИЧНЫЙ КАБИНЕТ
          </Link>
          <Link to="/" className="nav-link">
            КОРЗИНА (0)
          </Link>
        </nav>
        <button className="burger-menu mobile-only">...</button>
      </div>
    </header>
  );
};
