import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Services from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content, TwoInputsInline } from './styles';

const Register = () => {
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    Services.RegisterUser({ username, name, lastname, email, password });
  }

  return (
    <Container>
      <Content>
        <Form>
          <LowTitle style={{ marginBottom: '24px', placeSelf: 'center' }}>
            Cadastre-se!
          </LowTitle>

          <Input
            label="username"
            type="text"
            name="username"
            placeholder="Escolha um nome de usuário."
            onChange={({ target }: any) => setUserName(target.value)}
          />

          <TwoInputsInline>
            <Input
              label="Nome"
              type="text"
              name="password"
              placeholder="Insira seu nome."
              onChange={({ target }: any) => setName(target.value)}
            />

            <Input
              label="Sobrenome"
              type="password"
              name="password"
              placeholder="Insira o sobrenome."
              onChange={({ target }: any) => setLastName(target.value)}
            />
          </TwoInputsInline>

          <Input
            label="E-mail"
            type="password"
            name="password"
            placeholder="josedasilva@gmail.com"
            onChange={({ target }: any) => setEmail(target.value)}
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={({ target }: any) => setPassword(target.value)}
          />
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
