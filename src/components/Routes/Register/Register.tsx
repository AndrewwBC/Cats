import { useState, useEffect, useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../FormComponents/Button/style'
import Form from '../../FormComponents/Form'
import Input from '../../FormComponents/Input'
import { BackLogin, CatImg, Container, Content } from './styles'
import useUser from '../../../hooks/useUser'
import { useMutationUser } from '../../../hooks/useMutationUser'

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const formData = new FormData()

const Register = () => {
  const nave = useNavigate()

  const { mutate, data, isSuccess, isLoading, isError } = useMutationUser()

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    errorEmail: false,
    passError: false,
    empty: false,
  })

  function handleSubmit(e: any) {
    e.preventDefault()
    formData.append('username', userData.username)
    formData.append('email', userData.email)
    formData.append('password', userData.password)
    formData.append('functionKey', '2')
    if (
      !error.errorEmail &&
      !error.passError &&
      userData.email &&
      userData.password &&
      userData.username
    )
      mutate(formData)
  }

  function handleBlur({ target }: any) {
    if (target.type === 'email' && userData.email.length > 1) {
      if (isValidEmailRegex.test(userData.email))
        setError((prevState) => ({ ...prevState, errorEmail: false }))
      if (!isValidEmailRegex.test(userData.email))
        setError((prevState) => ({ ...prevState, errorEmail: true }))
    }
    if (target.type === 'password' && target.value.length >= 1) {
      if (target.value.length < 6) {
        setError((prevState) => ({ ...prevState, passError: true }))
      } else {
        setError((prevState) => ({ ...prevState, passError: false }))
      }
    }
  }

  console.log(data, isSuccess, isError)

  useEffect(() => {
    if (isSuccess && data.status === 200) {
      localStorage.setItem('emailValidate', userData.email)
      nave('/welcome')
    }
  }, [isSuccess, data])

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Content>
        <Form itemProp={true}>
          <div
            style={{
              display: 'flex',
              padding: '0px 64px',
              flexDirection: 'column',
            }}
          >
            <p
              style={{
                fontSize: '1.5rem',
                fontFamily: 'Poppins',
                margin: '24px 0 6px 0',
                placeSelf: 'start',
                fontWeight: '400',
              }}
            >
              Cadastre-se!
            </p>
            <p
              style={{
                fontSize: '14px',
                fontFamily: 'Poppins',
                margin: '0px 0px 18px 0px',
                placeSelf: 'start',
                fontWeight: '400',
              }}
            >
              Junte-se a nossa comunidade felina, e aproveite para compartilhar
              o cotidiano do seu gato!
            </p>
            <div>
              <Input
                label={
                  data?.userName === userData.username
                    ? 'Nome de usuário em uso'
                    : 'Nome de usuário'
                }
                type="text"
                name="username"
                placeholder="Escolha um nome de usuário."
                value={userData.username}
                onBlur={handleBlur}
                onChange={({ target }: any) =>
                  setUserData((prevState: any) => ({
                    ...prevState,
                    username: target.value,
                  }))
                }
              />

              <Input
                label={
                  data?.email === userData.email
                    ? 'E-mail em uso'
                    : error.errorEmail
                    ? 'E-mail inválido!'
                    : 'E-mail'
                }
                type="email"
                name="email"
                placeholder="josedasilva@gmail.com"
                value={userData.email}
                onBlur={handleBlur}
                onChange={({ target }: any) =>
                  setUserData((prevState: any) => ({
                    ...prevState,
                    email: target.value,
                  }))
                }
              />

              <Input
                label={
                  error.passError
                    ? 'Senha deve ter ao menos 6 caractéres!'
                    : 'Senha'
                }
                type="password"
                name="password"
                placeholder="Insira sua senha"
                value={userData.password}
                onChange={({ target }: any) =>
                  setUserData((prevState: any) => ({
                    ...prevState,
                    password: target.value,
                  }))
                }
                onBlur={handleBlur}
              />
            </div>

            <Button
              disabled={isLoading ? true : false}
              style={{ margin: '14px 0px' }}
              onClick={(e: any) => handleSubmit(e)}
            >
              Cadastrar
            </Button>
            <div
              style={{
                fontSize: '18px',
                color: '#c9c9c9',
                alignSelf: 'center',
              }}
            >
              <BackLogin>
                Já possui conta?{' '}
                <NavLink to="/login" style={{ borderBottom: '2px solid #000' }}>
                  {' '}
                  Faça Login
                </NavLink>
              </BackLogin>
            </div>
            <NavLink
              style={{
                alignSelf: 'center',
                margin: '16px 0px',
              }}
              to="/login"
            >
              <Button>Login</Button>
            </NavLink>
          </div>

          <CatImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </Form>
      </Content>
    </Container>
  )
}

export default Register
