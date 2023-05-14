import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PHP, UserRequirements } from '../../../api'
import { Title } from '../../GeneralComponents/Titles'

import { Content } from '../HomePage/styles'
import { Container } from './styles'

const ValidateEmail = () => {
  const [reload, setReload] = useState()
  const [response, setResponse] = useState<any>()

  let { token } = useParams()
  const navigate = useNavigate()
  console.log(token)

  useEffect(() => {
    checarEmail()
  }, [])

  async function checarEmail() {
    //await UserRequirements.CheckHashEmail(token, setReload);
    PHP.ValidaEmail(setResponse, setReload, token)
  }

  if (response) {
    setTimeout(() => {
      navigate('/login')
    }, 1000)
    setResponse(false)
  }

  return (
    <Container>
      <Content>
        <Title style={{ gridColumn: '1/-1' }}>
          Estamos validando o seu Email...
        </Title>
      </Content>
    </Container>
  )
}

export default ValidateEmail
