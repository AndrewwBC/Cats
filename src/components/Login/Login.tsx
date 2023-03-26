import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content } from './styles';

const Login = () => {
  const [email, setEmail] = useState('Primeiro');
  const [password, setPassword] = useState('Segundo');
  const formData = new FormData();

  function handleSubmit(e: any) {
    e.preventDefault();
    formData.append('nome', email);
    formData.append('email', password);
    PHP.TESTE(formData);
    //Services.UserLogin(email, password);
  }

  return (
    <Container>
      <Content>
        <Form>
          <LowTitle
            style={{
              marginBottom: '1.5rem',
              placeSelf: 'center',
              color: '#FF7F00',
            }}
          >
            CatGram
          </LowTitle>

          <Input
            label="E-mail"
            type="text"
            name="nome"
            placeholder="Insira seu email"
            onChange={({ target }: any) => setEmail(target.value)}
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={({ target }: any) => setPassword(target.value)}
            forget={true}
          />
          <Button onClick={(e) => handleSubmit(e)}>Entrar</Button>

          <h3 style={{ color: '#202020', placeSelf: 'center' }}>
            Ainda não é cadastrado? Registre-se!
          </h3>

          <NavLink style={{ placeSelf: 'center' }} to="/register">
            <Button>Cadastrar</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
