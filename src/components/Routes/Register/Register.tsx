import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../../api';
import { Button } from '../../FormComponents/Button/style';
import Form from '../../FormComponents/Form';
import Input from '../../FormComponents/Input';
import { LowTitle } from '../../GeneralComponents/Titles';
import { Container, Content, ErrorMSG, TwoInputsInline } from './styles';

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formData = new FormData();

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    errorEmail: false,
    passError: false,
    empty: false,
  });

  const [load, setLoad] = useState(false);
  const [checkUser, setCheckUser] = useState<any>();
  const [checkEmail, setCheckEmail] = useState<any>();
  const [response, setResponse] = useState<any>();

  function handleSubmit(e: any) {
    e.preventDefault();

    formData.append('username', userData.username);
    formData.append('name', userData.name);
    formData.append('lastname', userData.lastname);
    formData.append('email', userData.email);
    formData.append('password', userData.password);

    //Services.RegisterUser({ username, name, lastname, email, password });
    if (
      !checkUser &&
      !checkEmail &&
      !error.errorEmail &&
      !error.passError &&
      !error.empty
    ) {
      PHP.Cadastro(formData, setResponse, setLoad);
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
  console.log(userData);

  useEffect(() => {
    UserRequirements.CheckUserName(userData.username, setCheckUser);
    UserRequirements.CheckEmail(userData.email, setCheckEmail, setLoad);
  }, [userData.username, userData.email]);

  function handleBlur({ target }: any) {
    UserRequirements.CheckUserName(userData.username, setCheckUser);
    UserRequirements.CheckEmail(userData.email, setCheckEmail, setLoad);
    if (target.type === 'email' && userData.email.length > 1) {
      if (isValidEmailRegex.test(userData.email))
        setError((prevState) => ({ ...prevState, errorEmail: false }));
      if (!isValidEmailRegex.test(userData.email))
        setError((prevState) => ({ ...prevState, errorEmail: true }));
    }
    if (target.type === 'password' && target.value.length >= 1) {
      if (target.value.length < 6) {
        setError((prevState) => ({ ...prevState, passError: true }));
      } else {
        setError((prevState) => ({ ...prevState, passError: false }));
      }
    }

    if (
      (target.name === 'name' && target.value.length === 0) ||
      (target.name === 'lastname' && target.value.length === 0)
    ) {
      setError((prevState) => ({ ...prevState, vazio: true }));
    } else {
      setError((prevState) => ({ ...prevState, vazio: false }));
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
            value={userData.username}
            onBlur={handleBlur}
            onChange={({ target }: any) =>
              setUserData((prevState) => ({
                ...prevState,
                username: target.value,
              }))
            }
          />
          {checkUser && <h4>Usuário já existente.</h4>}
          <TwoInputsInline>
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Insira seu nome."
              value={userData.name}
              onChange={({ target }: any) =>
                setUserData((prevState) => ({
                  ...prevState,
                  name: target.value,
                }))
              }
              onBlur={handleBlur}
            />

            <Input
              label="Sobrenome"
              type="text"
              name="lastname"
              placeholder="Insira o sobrenome."
              value={userData.lastname}
              onChange={({ target }: any) =>
                setUserData((prevState) => ({
                  ...prevState,
                  lastname: target.value,
                }))
              }
              onBlur={handleBlur}
            />
          </TwoInputsInline>
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="josedasilva@gmail.com"
            value={userData.email}
            onBlur={handleBlur}
            onChange={({ target }: any) =>
              setUserData((prevState) => ({
                ...prevState,
                email: target.value,
              }))
            }
          />
          {checkEmail && <h4>Email já existente</h4>}
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={userData.password}
            onChange={({ target }: any) =>
              setUserData((prevState) => ({
                ...prevState,
                password: target.value,
              }))
            }
            onBlur={handleBlur}
          />
          {error.passError && (
            <ErrorMSG>Insira ao menos seis caractéres</ErrorMSG>
          )}
          {error.errorEmail && <ErrorMSG>Insira um Email válido</ErrorMSG>}

          <Button
            style={{ margin: '16px 0px' }}
            onClick={(e) => handleSubmit(e)}
          >
            Cadastrar
          </Button>

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
