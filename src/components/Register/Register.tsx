import { NavLink } from 'react-router-dom';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content, OneInputInline, TwoInputsInline } from './styles';

const Register = () => {
  return (
    <Container>
      <Content>
        <Form>
          <LowTitle style={{ marginBottom: '24px' }}>Cadastre-se!</LowTitle>

          <Input
            label="E-mail"
            type="text"
            name="nome"
            placeholder="Ponha seu nome"
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
          />
          <Button>Entrar</Button>

          <h3 style={{ color: '#202020' }}>Já possui conta? Faça login!</h3>

          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
