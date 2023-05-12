import { loadUser } from '../../shared/UserWidget/userWidget.slice';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const setUserInfo = () => {
    const payload = {
      name: 'John Doe',
      status: 'Regular',
    };
    dispatch(loadUser(payload));
  };

  return (
    <div className="container">
      <h1>Login Page works</h1>
      <form>
        <label>
          Email: <input type="email" />
        </label>
        <label>
          Password: <input type="password" />
        </label>
        <button type="button" onClick={setUserInfo}>
          Let me in
        </button>
      </form>
    </div>
  );
};
