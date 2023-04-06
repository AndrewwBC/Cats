import { useCallback, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container, Content } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState<any>();
  const [load, setLoad] = useState(false);
  const [files, setFiles] = useState<any>();

  const formData = new FormData();
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    formData.append('email', email);
    formData.append('password', password);
    const type = {
      email: {
        regex:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido.',
      },
    };
    if (type.email.regex.test(email) && password.length !== 0) {
      //Services.UserLogin(email, password, setResponse, setLoad);
      PHP.Login(formData, setResponse, setLoad);
    } else {
      alert('Preencha os dados corretamente');
    }
  }

  console.log(response);

  if (response) {
    localStorage.setItem('usercod', response);
    // navigate('/generalfeed');
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
            value={email}
            onChange={({ target }: any) => setEmail(target.value)}
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={({ target }: any) => setPassword(target.value)}
            forget={true}
          />

          <Button
            disabled={load ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </Button>

          <h3 style={{ color: '#202020', placeSelf: 'center' }}>
            Ainda não é cadastrado? Registre-se!
          </h3>
          <NavLink style={{ placeSelf: 'center' }} to="/register">
            <Button disabled={load ? true : false}>Cadastrar</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
