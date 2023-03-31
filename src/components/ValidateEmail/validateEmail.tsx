import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserRequirements } from '../../api';
import { LowTitle } from '../GeneralComponents/Titles';

import { Content } from '../HomePage/styles';
import { Container } from './styles';

const ValidateEmail = () => {
  const [reload, setReload] = useState();

  let { token } = useParams();
  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    checarEmail();
  }, []);

  async function checarEmail() {
    await UserRequirements.CheckHashEmail(token, setReload);
  }

  if (reload) {
    navigate('/');
  }

  return (
    <Container>
      <Content>
        <LowTitle style={{ gridColumn: '1/-1' }}>
          Estamos validando o seu Email...
        </LowTitle>
      </Content>
    </Container>
  );
};

export default ValidateEmail;
