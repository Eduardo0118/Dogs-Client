import Button from 'Components/Forms/Button/Button';
import Input from 'Components/Forms/Input/Input';
import { UserContext } from 'Context/UserContext';
import useForm from 'Hooks/useForm';
import useFetch from 'Hooks/useFetch';
import React from 'react';
import { USER_POST } from 'Services/Api';
import Error from 'Components/Helper/Error';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const { loading, error, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value
    });
    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
