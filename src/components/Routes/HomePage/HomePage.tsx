import {
  Content,
  Main,
  Intro,
  ImgContainer,
  IntroText,
  IntroButtons,
  Access,
} from './styles'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import { Title } from '../../GeneralComponents/Titles'
import { Button } from '../../FormComponents/Button/style'
import { NavLink, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  if (localStorage.getItem('token')) navigate('/generalfeed')

  return (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Content>
        <ImgContainer src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" />
        <Intro>
          <div>
            <Title>Bem vindo ao Catgram.</Title>
          </div>

          <IntroText>
            <Paragraph style={{}} itemProp="18px">
              A melhor rede social para o seu felino!!
            </Paragraph>

            <Paragraph itemProp="18px">
              Aproveite para exibir toda a beleza do seu Pet!
            </Paragraph>
          </IntroText>

          <IntroButtons>
            <Access>Acesse rapidamente</Access>
            <NavLink to={'/login'}>
              <Button>Login</Button>
            </NavLink>
            <NavLink to={'/register'}>
              <Button>Cadastro</Button>
            </NavLink>
          </IntroButtons>
        </Intro>
      </Content>
    </Main>
  )
}

export default HomePage
