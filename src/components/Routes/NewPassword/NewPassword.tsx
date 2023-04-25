import { useEffect, useState } from 'react'
import { Button } from '../../FormComponents/Button/style'
import Form from '../../FormComponents/Form'
import Input from '../../FormComponents/Input'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import { Title } from '../../GeneralComponents/Titles'
import { Container } from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { UserRequirements } from '../../../api'

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [samePass, setSamePass] = useState(false)
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [load, setLoad] = useState(false)

  let navigate = useNavigate()

  let { email } = useParams()

  useEffect(() => {
    UserRequirements.CheckEmail(email, setResponse, setLoad)
    if (newPassword)
      newPassword === confirmPassword ? setSamePass(true) : setSamePass(false)
    if (newPassword === '') setSamePass(false)
  }, [confirmPassword, newPassword, email])
  // if (response === false && response !== undefined) navigate('/');

  function handleSubmit(event: any) {
    event.preventDefault()

    UserRequirements.ResetPassword(
      setLoad,
      setError,
      email,
      confirmPassword,
      setResponse,
    )
  }
  if (response === 1) {
    setTimeout(() => {
      navigate('/login')
    }, 1000)
  }
  return (
    <Container>
      <>
        <Form>
          <Title style={{ placeSelf: 'center', marginBottom: '.6rem' }}>
            Mude sua senha!
          </Title>

          <Input
            label="Digite uma nova senha"
            name="newpass"
            onChange={({ target }: any) => setNewPassword(target.value)}
            placeholder=""
            type="password"
            value={newPassword}
          />
          <Input
            label="Confirme sua senha"
            name="confirmpass"
            onChange={({ target }: any) => setConfirmPassword(target.value)}
            placeholder=""
            type="password"
            value={confirmPassword}
          />

          {samePass && (
            <>
              <Paragraph style={{ placeSelf: 'center', color: '#202020' }}>
                Senhas iguais
              </Paragraph>
            </>
          )}
          {response === 1 && <p>Senha alterada com sucesso!</p>}
          {load ? (
            <Button disabled={true} type="submit" onClick={handleSubmit}>
              Confirmar
            </Button>
          ) : (
            <Button type="submit" onClick={handleSubmit}>
              Confirmar
            </Button>
          )}
        </Form>
      </>
    </Container>
  )
}

export default NewPassword
