import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from 'Context/UserContext';

import Input from 'Components/Forms/Input/Input';
import Button from 'Components/Forms/Button/Button';
import useForm from 'Hooks/useForm';
import Error from 'Components/Helper/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loading, error } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validator() && password.validator()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
      <Link className={styles.forgotPass} to="/login/forgot-pass">
        Perdeu a Senha?
      </Link>
      <div className={styles.createAccount}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
