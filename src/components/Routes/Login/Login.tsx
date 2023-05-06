import { useCallback, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Services, { PHP, UserRequirements } from '../../../api'
import { Button } from '../../FormComponents/Button/style'
import Form from '../../FormComponents/Form'
import Input from '../../FormComponents/Input'
import { Catgram } from '../../GeneralComponents/Titles'
import { Container, Content } from './styles'
import useUser from '../../../hooks/useUser'
import { UseMutateFunction, useMutation } from 'react-query'
import { FunctionDeclaration } from 'typescript'
import { useMutationUser } from '../../../hooks/useMutationUser'

const isValidEmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const formData = new FormData()

const Login = () => {
  const { mutate, data, isSuccess } = useMutationUser()
  const [load, setLoad] = useState()
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const { setUser } = useUser()
  const navigate = useNavigate()

  console.log(data, isSuccess)

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

  if (data?.status === 200) {
    setUser(data.data)
    localStorage.setItem('user', JSON.stringify(data.data))
    navigate('/userpage')
  }
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Content>
        <Form>
          <Catgram
            style={{
              marginBottom: '1.5rem',
              placeSelf: 'center',
              color: '#FF7F00',
            }}
          >
            CatGram
          </Catgram>
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
            style={{ marginTop: '12px' }}
            disabled={load ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </Button>
          <p style={{ placeSelf: 'center' }}>
            {/* {isSuccess && data.data.message} */}
          </p>
          <h4 style={{ placeSelf: 'center', fontWeight: 400 }}>
            Não possui conta? <NavLink to="/register">Registre-se!</NavLink>
          </h4>
          <NavLink style={{ placeSelf: 'center' }} to="/register">
            <Button disabled={load ? true : false}>Cadastrar</Button>
          </NavLink>
        </Form>
      </Content>
    </Container>
  )
}

export default Login
