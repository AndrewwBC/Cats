import React, { useState } from 'react'
import { PHP, UserRequirements } from '../../../api'
import { Button } from '../../FormComponents/Button/style'
import Form from '../../FormComponents/Form'
import Input from '../../FormComponents/Input'
import { Container, Content } from './styles'
import { useMutation } from '@tanstack/react-query'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'

const emailIsValid =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const { data, isLoading, mutate, isError } = useMutation({
    mutationKey: ['resetPass'],
    mutationFn: () => PHP.emailToChangePass(email),
  })

  console.log(data)

  function handleSubmit(e: any) {
    e.preventDefault()
    mutate()
  }

  return (
    <Container>
      <Content>
        <Form>
          <Title>Recupere sua senha!</Title>
          <Paragraph style={{ marginBottom: '18px' }}>
            Enviaremos um e-mail para você!
          </Paragraph>
          <Input
            label={data === 401 ? 'Email não cadastrado!' : 'E-mail'}
            name="resetinput"
            value={email}
            onChange={({ target }: any) => setEmail(target.value)}
            placeholder="Insira o seu email"
            type="text"
          />
          <Button
            style={{ placeSelf: 'center', marginTop: '16px' }}
            type="submit"
            disabled={isLoading ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Recuperar senha
          </Button>
        </Form>
      </Content>
    </Container>
  )
}
export default ForgotPassword
