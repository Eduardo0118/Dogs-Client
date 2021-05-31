import React from 'react';
import { Link } from 'react-router-dom';

import Input from 'Components/Forms/Input/Input';
import Button from 'Components/Forms/Button/Button';
import useForm from 'Hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault;
  }

  console.log(username);

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
