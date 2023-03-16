import { useEffect, useState } from 'react';
import { Button } from '../FormComponents/Button/style';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import { Paragraph } from '../GeneralComponents/Paragraph';
import { LowTitle } from '../GeneralComponents/Titles';
import { Container } from './styles';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [samePass, setSamePass] = useState(false);

  useEffect(() => {
    if (newPassword)
      newPassword === confirmPassword ? setSamePass(true) : setSamePass(false);
  }, [confirmPassword, newPassword]);

  return (
    <Container>
      <>
        <Form>
          <LowTitle style={{ placeSelf: 'center', marginBottom: '.6rem' }}>
            Mude sua senha!
          </LowTitle>

          <Input
            label="Digite uma nova senha"
            name="newpass"
            onChange={({ target }: any) => setNewPassword(target.value)}
            placeholder=""
            type="password"
          ></Input>
          <Input
            label="Confirme sua senha"
            name="confirmpass"
            onChange={({ target }: any) => setConfirmPassword(target.value)}
            placeholder=""
            type="password"
          ></Input>

          {samePass && (
            <>
              <Paragraph style={{ placeSelf: 'center' }}>
                Senhas iguais
              </Paragraph>
            </>
          )}

          <Button>Confirmar</Button>
        </Form>
      </>
    </Container>
  );
};

export default NewPassword;
