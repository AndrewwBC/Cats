import { Container, FormBody } from './styles';

const Form = ({ itemProp, children }: any) => {
  return (
    <Container>
      <FormBody itemProp={itemProp}>{children}</FormBody>
    </Container>
  );
};

export default Form;
