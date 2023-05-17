import { Container, Content, CopyRights } from './styles'

const Footer = () => {
  let user = localStorage.getItem('user')
  
    return (
      <Container>
        <Content>
          <CopyRights>Alguns direitos reservados.</CopyRights>
        </Content>
      </Container>
    )
}

export default Footer
