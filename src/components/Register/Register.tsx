import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content, ErrorMSG, TwoInputsInline } from './styles';

const Register = () => {
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [checkUser, setCheckUser] = useState<any>();
  const [checkEmail, setCheckEmail] = useState<any>();
  //const formData = new FormData();

  function handleSubmit(e: any) {
    e.preventDefault();

    // if (checkUser === 1) {
    //   setUserError(true);
    // } else if (checkUser === 0) {
    //   setUserError(false);
    // }

    // if (checkEmail === 1) {
    //   setEmailError(true);
    // } else if (checkEmail === 0) {
    //   setEmailError(false);
    // }
    //Services.RegisterUser({ username, name, lastname, email, password });
    //UserRequirements.PHP();
  }

  function handleBlur({ target }: any) {
    UserRequirements.CheckUserName(username, setCheckUser);
    UserRequirements.CheckEmail(email, setCheckEmail);
    if (target.type === 'email') {
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
    if (target.type === 'password') {
      if (target.value.length < 6) {
        setPassError(true);
      } else {
        setPassError(false);
      }
    }
  }

  // async function fileSelected(event: any) {
  //   // const file = event.target.files[0];
  //   // formData.append('image', file);
  //   // formData.append('userID', '1');
  //   // setFile(file);
  //   // Upload
  //   // await UserRequirements.PostFeedPhoto(formData);
  //   // Download
  //   //await UserRequirements.getURL(1, setURL);
  //   //JSON PHP
  //   // await UserRequirements.PHP(setURL).then((response) => url.push(response));
  //   // // console.log(url);
  // }

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
            setUserError={setUserError}
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
            />

            <Input
              label="Sobrenome"
              type="text"
              name="sobrenome"
              placeholder="Insira o sobrenome."
              value={lastname}
              setValue={setLastName}
              onChange={({ target }: any) => setLastName(target.value)}
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
            setEmailError={setEmailError}
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
