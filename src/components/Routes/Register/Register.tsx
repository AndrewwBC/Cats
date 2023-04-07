import { useCallback, useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../../api';
import { Button } from '../../FormComponents/Button/style';
import Form from '../../FormComponents/Form';
import Input from '../../FormComponents/Input';
import { LowTitle } from '../../GeneralComponents/Titles';
import { Container, Content, ErrorMSG, TwoInputsInline } from './styles';

const Register = () => {
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [load, setLoad] = useState(false);
  const [checkUser, setCheckUser] = useState<any>();
  const [checkEmail, setCheckEmail] = useState<any>();
  const [response, setResponse] = useState<any>();
  const formData = new FormData();

  function handleSubmit(e: any) {
    e.preventDefault();

    formData.append('username', username);
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);

    //Services.RegisterUser({ username, name, lastname, email, password });
    if (!checkUser && !checkEmail && !error && !passError && !empty) {
      PHP.Cadastro(formData, setResponse, setLoad);
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
  console.log(response);

  useEffect(() => {
    UserRequirements.CheckUserName(username, setCheckUser);
    UserRequirements.CheckEmail(email, setCheckEmail, setLoad);
  }, [username, email]);

  function handleBlur({ target }: any) {
    UserRequirements.CheckUserName(username, setCheckUser);
    UserRequirements.CheckEmail(email, setCheckEmail, setLoad);
    if (target.type === 'email' && target.value.length > 1) {
      const type = {
        email: {
          regex:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Email inválido.',
        },
      };
      if (type.email.regex.test(target.value)) setError(false);
      if (!type.email.regex.test(target.value)) setError(true);
    }
    if (target.type === 'password' && target.value.length >= 1) {
      if (target.value.length < 6) {
        setPassError(true);
      } else {
        setPassError(false);
      }
    }

    if (
      (target.name === 'name' && target.value.length === 0) ||
      (target.name === 'sobrenome' && target.value.length === 0)
    ) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }

  return (
    <Container>
      <Content>
        <Form>
          <LowTitle style={{ marginBottom: '24px', placeSelf: 'center' }}>
            Cadastre-se!
          </LowTitle>
          <Input
            label="Nome de usuário"
            type="text"
            name="username"
            placeholder="Escolha um nome de usuário."
            value={username}
            setValue={setUserName}
            onBlur={handleBlur}
            onChange={({ target }: any) => setUserName(target.value)}
          />
          {checkUser && <h4>Usuário já existente.</h4>}
          <TwoInputsInline>
            <Input
              label="Nome"
              type="text"
              name="nome"
              placeholder="Insira seu nome."
              value={name}
              setValue={setName}
              onChange={({ target }: any) => setName(target.value)}
              onBlur={handleBlur}
            />

            <Input
              label="Sobrenome"
              type="text"
              name="sobrenome"
              placeholder="Insira o sobrenome."
              value={lastname}
              setValue={setLastName}
              onChange={({ target }: any) => setLastName(target.value)}
              onBlur={handleBlur}
            />
          </TwoInputsInline>
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="josedasilva@gmail.com"
            value={email}
            setValue={setEmail}
            setError={setError}
            onBlur={handleBlur}
            onChange={({ target }: any) => setEmail(target.value)}
          />
          {checkEmail && <h4>Email já existente</h4>}
          <Input
            label="Senha"
            type="password"
            name="email"
            placeholder="Insira sua senha"
            value={password}
            setValue={setPassword}
            setPassError={setPassError}
            onChange={({ target }: any) => setPassword(target.value)}
            onBlur={handleBlur}
          />
          {passError && <ErrorMSG>Insira ao menos seis caractéres</ErrorMSG>}
          {error && <ErrorMSG>Insira um Email válido</ErrorMSG>}

          <Button onClick={(e) => handleSubmit(e)}>Cadastrar</Button>

          <h3 style={{ color: '#202020', placeSelf: 'center' }}>
            Já possui conta? Faça login!
          </h3>

          <NavLink style={{ placeSelf: 'center' }} to="/login">
            <Button>Login</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
