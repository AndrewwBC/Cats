import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Services, { UserRequirements } from '../../api';
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

  //const formData = new FormData();

  function handleSubmit(e: any) {
    e.preventDefault();

    Services.RegisterUser({ username, name, lastname, email, password });
    //UserRequirements.PHP();
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
          />
          {!userError && <h4>Usuário já existente.</h4>}
          <TwoInputsInline>
            <Input
              label="Nome"
              type="text"
              name="nome"
              placeholder="Insira seu nome."
              value={name}
              setValue={setName}
            />

            <Input
              label="Sobrenome"
              type="text"
              name="sobrenome"
              placeholder="Insira o sobrenome."
              value={lastname}
              setValue={setLastName}
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
          />
          {!emailError && <h4>Email já existente</h4>}
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={password}
            setValue={setPassword}
            setPassError={setPassError}
          />
          {!passError && <ErrorMSG>Insira ao menos seis caractéres</ErrorMSG>}
          {console.log(error, emailError, userError, passError)}
          {error && emailError && userError && passError ? (
            <Button disabled={false} onClick={(e) => handleSubmit(e)}>
              Cadastrar
            </Button>
          ) : (
            <Button disabled={true} onClick={(e) => handleSubmit(e)}>
              Cadastrar
            </Button>
          )}
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
