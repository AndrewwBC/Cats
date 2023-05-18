import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../FormComponents/Button/style'
import Input from '../../FormComponents/Input'
import { Catgram } from '../../GeneralComponents/Titles'
import { Container, Content, Form } from './styles'
import useUser from '../../../hooks/useUser'
import { useMutationUser } from '../../../hooks/useMutationUser'

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const formData = new FormData()

const Login = () => {
  const { mutate, data, isSuccess, isLoading } = useMutationUser()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  async function handleSubmit(e: any) {
    e.preventDefault()
    let { email, password } = loginData
    formData.append('email', email)
    formData.append('password', password)
    formData.append('functionKey', '1')

    if (isValidEmailRegex.test(email) && password) {
      mutate(formData)
    } else {
      alert('Preencha os dados corretamente')
    }
  }

  if (isSuccess && data?.status === 200 && !localStorage.getItem('token')) {
    localStorage.setItem('token', data.data)
    window.location.href = 'generalfeed'
  } else if (data?.status === 401) {
    alert(data.message)
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <Content>
        <Catgram>Sinta-se à vontade!</Catgram>
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
