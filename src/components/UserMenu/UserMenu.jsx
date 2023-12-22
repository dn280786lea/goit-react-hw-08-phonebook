import { useDispatch } from 'react-redux';
import { logOut } from '..//../redux/auth/operations';
import { useAuth } from '..//../hooks/useAuth';
import {} from './UserMenu.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="contact-logout">
      <p className="contact-logout">Welcome, {user.name}</p>
      <button
        className="contact-btn"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
