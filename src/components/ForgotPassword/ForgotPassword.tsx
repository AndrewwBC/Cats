import React, { useState } from 'react';
import { UserRequirements } from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { Container, Content } from './styles';

const ForgotPassword = () => {
  const [recoverData, setRecoverData] = useState('');
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState<any>();

  function handleSubmit(e: any) {
    e.preventDefault();
    const type = {
      email: {
        regex:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido.',
      },
    };
    type.email.regex.test(recoverData) === true
      ? UserRequirements.ForgotPassword(
          setLoad,
          setError,
          recoverData,
          setResponse,
        )
      : alert('Preencha corretamente');
  }
  console.log(response);
  return (
    <Container>
      <Content>
        <Form>
          <Input
            label="E-mail"
            name="resetinput"
            value={recoverData}
            onChange={({ target }: any) => setRecoverData(target.value)}
            placeholder="Insira o seu email"
            type="text"
          ></Input>

          <Button
            style={{ placeSelf: 'center' }}
            type="submit"
            disabled={load ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Recuperar senha
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
