import { Container, FormBody } from './styles';

const Form = (props: any) => {
  return (
    <Container>
      <FormBody>{props.children}</FormBody>
    </Container>
  );
};

export default Form;
