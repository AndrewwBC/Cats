import { Container, Content } from './styles'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import { useQuery } from '@tanstack/react-query'
import Confetti from 'react-confetti'
import { PHP } from '../../../api'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const nave = useNavigate()
  const formData = new FormData()
  const email: any = localStorage.getItem('emailValidate')

  formData.append('emailValidate', email)

  const { data, isLoading, isSuccess } = useQuery(
    ['confetti', email],
    () => PHP.confirmarCadastro(formData),
    {
      retry: false,
      cacheTime: 1000,
    },
  )
  console.log(data)
  if (!isLoading && isSuccess) {
    localStorage.clear()
    nave('/login')
  }

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
        style={{ overflow: 'hidden', maxWidth: '100%', height: '100vh' }}
      />
    </>
  )
}

export default Welcome
