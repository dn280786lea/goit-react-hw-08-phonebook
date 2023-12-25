import { useDispatch } from 'react-redux';
import { logOut } from '..//../redux/auth/operations';
import { useAuth } from '..//../hooks/useAuth';
import {} from './UserMenu.css';
import defaultAvatar from '..//../img/Pink and Yellow Cat Modern Hand Drawn Abstract Twitch Profile Picture.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="contact-logout">
      <img className="avatar" alt="default Avatar" src={defaultAvatar} />
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
