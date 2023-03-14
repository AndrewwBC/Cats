import React, { useState } from 'react';
import { UserRequirements } from '../../api';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { Container, Content } from './styles';

const ForgotPassword = () => {
  const [recoverData, setRecoverData] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    UserRequirements.ResetPassword(recoverData);
  }

  return (
    <Container>
      <Content>
        <Form>
          <Input
            label="E-mail"
            name="resetinput"
            onChange={({ target }: any) => setRecoverData(target.value)}
            placeholder="Insira o seu email ou nome de usuário"
            type="text"
          ></Input>

          <Button
            style={{ placeSelf: 'center' }}
            type="submit"
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
