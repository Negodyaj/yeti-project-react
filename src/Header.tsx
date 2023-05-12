import './Header.scss';
import { Link } from 'react-router-dom';
import { RootState } from './store/store';
import { UserWidget } from './shared/UserWidget/UserWidget';
import { logOut } from './shared/UserWidget/userWidget.slice';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';

export const Header = () => {
  const dispatch = useDispatch();
  const userWidgetState = useSelector((state: RootState) => state.userWidget);

  const onLogOutClick = () => {
    dispatch(logOut());
  };

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
          {userWidgetState.name && (
            <Link to="/" className="nav-link">
              ЛИЧНЫЙ КАБИНЕТ
            </Link>
          )}
          <Link to="/" className="nav-link">
            КОРЗИНА (0)
          </Link>
          {!userWidgetState.name && (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
          {userWidgetState.name && (
            <button onClick={onLogOutClick} className="nav-link">
              Log out
            </button>
          )}
          <UserWidget />
        </nav>
        <button className="burger-menu mobile-only">...</button>
      </div>
    </header>
  );
};
