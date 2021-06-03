import Button from 'Components/Forms/Button/Button';
import Input from 'Components/Forms/Input/Input';
import { UserContext } from 'Context/UserContext';
import useForm from 'Hooks/useForm';
import React from 'react';
import { USER_POST } from 'Services/Api';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    });
    const response = await fetch(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar-se</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
