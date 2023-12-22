import { useDispatch } from 'react-redux';
import { logIn } from '..//../redux/auth/operations';
import {} from './LoginForm.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="login-form">
      <h2 className="form-title-lh">Log In</h2>
      <div className="row-form">
        <label className="label">
          Email
          <input type="email" name="email" className="input" />
        </label>
      </div>
      <div className="row-form">
        <label className="label">
          Password
          <input type="password" name="password" className="input" />
        </label>
      </div>
      <button type="submit" className="btn-primary-lg">
        Log In
      </button>
    </form>
  );
};
