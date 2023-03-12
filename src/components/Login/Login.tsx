import { NavLink } from 'react-router-dom';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content, OneInputInline, TwoInputsInline } from './styles';

const Login = () => {
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
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha..."
          />
          <Button>Entrar</Button>

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
