import { useDispatch } from 'react-redux';
import { register } from '..//../redux/auth/operations';
import {} from './RegisterForm.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="form-reg" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="form-title">Sing Up</h2>
      <div className="row-form">
        <label htmlFor="inputEmail3" className="row-form-label">
          User name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="name" />
        </div>
      </div>
      <div className="row-form">
        <label htmlFor="inputEmail3" className="row-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            name="email"
          />
        </div>
      </div>
      <div className="row-form">
        <label htmlFor="inputPassword3" className="row-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            name="password"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary">
        Sign in
      </button>
    </form>
  );
};
