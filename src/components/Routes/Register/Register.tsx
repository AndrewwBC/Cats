import { useState, useEffect, useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../FormComponents/Button/style'
import Input from '../../FormComponents/Input'
import { CatImg, Container, Content, Form, InputGridPosition } from './styles'
import { useMutationUser } from '../../../hooks/useMutationUser'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const formData = new FormData()

const Register = () => {
  const nave = useNavigate()
  const [file, setFile] = useState('')
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

  const { mutate, data, isSuccess, isLoading, isError } = useMutationUser()
  console.log(file)
  function handleSubmit(e: any) {
    e.preventDefault()
    formData.append('username', userData.username)
    formData.append('email', userData.email)
    formData.append('password', userData.password)
    formData.append('profilePic', file)
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

  document.title = 'Cadastro'

  useEffect(() => {
    if (isSuccess && data.status === 200) {
      nave('/welcome')
    }
  }, [isSuccess, data])

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <Content>
        <Form>
          <Title style={{ fontSize: '1.6rem', gridColumn: '1/-1' }}>
            Cadastre-se!
          </Title>
          <Paragraph style={{ gridColumn: '1/-1' }}>
            Junte-se a nossa comunidade felina, e aproveite para compartilhar o
            cotidiano do seu gato!
          </Paragraph>
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <InputGridPosition>
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
              </InputGridPosition>
            </div>
          </div>

          <Button
            disabled={isLoading ? true : false}
            style={{
              margin: '14px 32px 14px 0',
              maxWidth: '100%',
              gridColumn: '1/-1',
            }}
            onClick={(e: any) => handleSubmit(e)}
          >
            {isLoading ? 'Cadastro em andamento...' : 'Cadastrar'}
          </Button>
        </Form>

        <CatImg
          width={260}
          src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </Content>
    </Container>
  )
}

export default Register
