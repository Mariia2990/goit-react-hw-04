import css from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
  return <p className={css.errorMessage}>{message}</p>;
}

export default ErrorMessage;