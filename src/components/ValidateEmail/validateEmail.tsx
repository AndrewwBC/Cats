import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserRequirements } from '../../api';
import { LowTitle } from '../GeneralComponents/Titles';

import { Content } from '../HomePage/styles';
import { Container } from './styles';

const ValidateEmail = () => {
  const [reload, setReload] = useState<any>();
  let { token } = useParams();
  const navigate = useNavigate();
  console.log(token);

  useEffect(() => {
    UserRequirements.CheckHashEmail(token, setReload);
    setTimeout(() => {
      if (reload && reload[0].Cod) {
        navigate('/');
      }
    }, 500);
  }, [token, reload]);

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
