import { Container, Content, CopyRights } from './styles'

const Footer = () => {
  let user = localStorage.getItem('user')

  if (user && window.innerWidth <= 768) return null
  else
    return (
      <Container>
        <Content>
          <CopyRights>Alguns direitos reservados.</CopyRights>
        </Content>
      </Container>
    )
}

export default Footer
