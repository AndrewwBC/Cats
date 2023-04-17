import { useCallback, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Services, { PHP, UserRequirements } from '../../../api';
import { Button } from '../../FormComponents/Button/style';
import Form from '../../FormComponents/Form';
import Input from '../../FormComponents/Input';
import { Catgram } from '../../GeneralComponents/Titles';
import { Container, Content } from './styles';
import useUser from '../../../hooks/useUser';

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formData = new FormData();

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [response, setResponse] = useState<any>();
  const [load, setLoad] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    let { email, password } = loginData;

    formData.append('email', email);
    formData.append('password', password);

    if (isValidEmailRegex.test(email) && password) {
      Services.UserLogin(email, password, setResponse, setLoad);
      PHP.Login(formData, setResponse, setLoad);
    } else {
      alert('Preencha os dados corretamente');
    }
  }
  if (response) {
    console.log(response);
    localStorage.setItem('usercod', response[0].Cod);
    localStorage.setItem('username', response[0].UserName);
    setUser(response[0].UserName);
    navigate('/generalfeed');
  }

  return (
    <Container>
      <Content>
        <Form>
          <Catgram
            style={{
              marginBottom: '1.5rem',
              placeSelf: 'center',
              color: '#FF7F00',
            }}
          >
            CatGram
          </Catgram>
          <Input
            label="E-mail"
            type="text"
            name="nome"
            placeholder="Insira seu email"
            value={loginData.email}
            onChange={({ target }: any) =>
              setLoginData((prevState) => ({
                ...prevState,
                email: target.value,
              }))
            }
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={loginData.password}
            onChange={({ target }: any) =>
              setLoginData((prevState) => ({
                ...prevState,
                password: target.value,
              }))
            }
            forget={true}
          />
          <Button
            style={{ marginTop: '12px' }}
            disabled={load ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </Button>
          <h4 style={{ placeSelf: 'center', fontWeight: 400 }}>
            Não possui conta? <NavLink to="/register">Registre-se!</NavLink>
          </h4>
          <NavLink style={{ placeSelf: 'center' }} to="/register">
            <Button disabled={load ? true : false}>Cadastrar</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
