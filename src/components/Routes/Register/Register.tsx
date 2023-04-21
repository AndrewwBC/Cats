import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../../api';
import { Button } from '../../FormComponents/Button/style';
import Form from '../../FormComponents/Form';
import Input from '../../FormComponents/Input';
import {
  BackLogin,
  CatImg,
  Container,
  Content,
  ErrorMSG,
  TwoInputsInline,
} from './styles';

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formData = new FormData();

const Register = () => {
  const nave = useNavigate();
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

    let {username, name, lastname, email, password} =  userData;

    formData.append('username', userData.username);
    formData.append('name', userData.name);
    formData.append('lastname', userData.lastname);
    formData.append('email', userData.email);
    formData.append('password', userData.password);

    Services.RegisterUser({ username, name, lastname, email, password});
    if (
      !checkUser &&
      !checkEmail &&
      !error.errorEmail &&
      !error.passError &&
      !error.empty
    ) {
      //PHP.Cadastro(formData, setResponse, setLoad);
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
  //if(response) nave('/login')
  if (response) {
    nave('/login');
  }
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
    <Container initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0, y: -50}} transition={{duration: .3}} >
      <Content>
        <Form itemProp={true}>
          <div
            style={{
              display: 'flex',
              padding: '0px 64px',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                fontFamily: 'Poppins',
                margin: '24px 0 6px 0',
                placeSelf: 'start',
                fontWeight: '400',
              }}
            >
              Cadastre-se!
            </p>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Poppins',
                margin: '0px 0px 18px 0px',
                placeSelf: 'start',
                fontWeight: '400',
              }}
            >
              Junte-se a nossa comunidade felina, e aproveite para compartilhar
              o cotidiano do seu gato!
            </p>
            <div>
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

              <Input
                label="Nome completo"
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
            </div>

            <Button
              style={{ margin: '14px 0px' }}
              onClick={(e) => handleSubmit(e)}
            >
              Cadastrar
            </Button>

            <div
              style={{
                fontSize: '18px',
                color: '#c9c9c9',
                alignSelf: 'center',
              }}
            >
              <BackLogin>
                Já possui conta?{' '}
                <NavLink to="/login" style={{ borderBottom: '2px solid #000' }}>
                  {' '}
                  Faça Login
                </NavLink>
              </BackLogin>
            </div>
            <NavLink
              style={{
                alignSelf: 'center',
                margin: '16px 0px',
              }}
              to="/login"
            >
              <Button>Login</Button>
            </NavLink>
          </div>

          <CatImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
