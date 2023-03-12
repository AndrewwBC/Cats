import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Services from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    Services.UserLogin(email, password);
  }

  return (
    <Container>
      <Content>
        <Form>
          <LowTitle style={{ marginBottom: '24px' }}>Login</LowTitle>

          <Input
            label="E-mail"
            type="text"
            name="nome"
            placeholder="Insira seu nome..."
            onChange={({ target }: any) => setEmail(target.value)}
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha..."
            onChange={({ target }: any) => setPassword(target.value)}
          />
          <Button onClick={(e) => handleSubmit(e)}>Entrar</Button>

          <h3 style={{ color: '#202020' }}>
            Ainda não é cadastrado? Registre-se!
          </h3>

          <NavLink to="/register">
            <Button>Cadastrar</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
