import { Container, Content } from './styles'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import Confetti from 'react-confetti'

const Welcome = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>Cadastro realizado com sucesso!</Title>
          <Paragraph itemProp="1.1rem" style={{ color: '#fb1' }}>
            Enviamos um E-mail para você confirmar o seu cadastro!
          </Paragraph>
        </Content>
      </Container>
      <Confetti
        gravity={0.2}
        style={{
          overflow: 'hidden',
          maxWidth: '100%',
          height: '100vh',
          position: 'absolute',
        }}
      />
    </>
  )
}

export default Welcome
