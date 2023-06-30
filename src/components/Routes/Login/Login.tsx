import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../FormComponents/Button/style'
import Input from '../../FormComponents/Input'
import { Catgram } from '../../GeneralComponents/Titles'
import { Container, Content, Form } from './styles'
import { useMutationUser } from '../../../hooks/useMutationUser'
import axios from 'axios'

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const formData = new FormData()

const Login = () => {
  const nave = useNavigate()
  const { mutate, data, isSuccess, isLoading } = useMutationUser()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  document.title = 'Login'

  async function handleSubmit(e: any) {
    e.preventDefault()
    let { email, password } = loginData
    if (email === 'admim@gmail.com') {
      formData.append('email', email)
      formData.append('password', password)

      formData.append('functionKey', '5')
      try {
        const response = await axios.post(
          'http://localhost/ReactPHP/Adm/Actions.php',
          formData,
        )
        if (response.status === 200) {
          console.log(response.data)
          localStorage.setItem('token', response.data.admAuthorization)
          localStorage.setItem('admAuth', response.data.admAuthorization)
          window.location.href = '/dashboard'
          return
        } else {
          alert(response.data)
          return response.data
        }
      } catch (err) {
        alert(err)
        return err
      } finally {
        return
      }
    }
    e.preventDefault()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('functionKey', '1')

    if (isValidEmailRegex.test(email) && password) {
      mutate(formData)
    } else {
      alert('Preencha os dados corretamente')
    }
  }

  if (
    localStorage.getItem('token') &&
    !localStorage.getItem('admAuth') &&
    !data
  ) {
    window.location.href = 'userpage'
  }

  if (isSuccess && data?.status === 200 && !localStorage.getItem('token')) {
    localStorage.setItem('token', data.data)
    window.location.href = 'userpage'
  } else if (data?.status === 401) {
    alert(data.message)
  }

  return (
    <Container>
      <Content>
        <Catgram style={{ placeSelf: 'center' }}>Sinta-se à vontade!</Catgram>
        <Form>
          <Input
            label="E-mail"
            type="text"
            name="nome"
            placeholder="Insira seu email"
            value={loginData.email}
            onChange={({ target }: any) =>
              setLoginData((prevState) => ({
                ...prevState,
                email: target.value,
              }))
            }
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            value={loginData.password}
            onChange={({ target }: any) =>
              setLoginData((prevState) => ({
                ...prevState,
                password: target.value,
              }))
            }
            forget={true}
          />
          <Button
            style={{ margin: '24px 0px' }}
            disabled={isLoading ? true : false}
            onClick={(e: any) => handleSubmit(e)}
          >
            {isLoading ? 'Validando seus dados...' : 'Login'}
          </Button>
          <p style={{ placeSelf: 'center', color: 'red' }}>
            {data && data.message}
          </p>
          <h4 style={{ placeSelf: 'center', fontWeight: 400 }}>
            Não possui conta? <NavLink to="/register">Registre-se!</NavLink>
          </h4>
          <br />
          <NavLink style={{ placeSelf: 'center' }} to="/register">
            <Button disabled={isLoading ? true : false}>Cadastrar</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  )
}

export default Login
