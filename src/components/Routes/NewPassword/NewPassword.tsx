import { useState } from 'react'
import { Button } from '../../FormComponents/Button/style'
import Input from '../../FormComponents/Input'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import { Title } from '../../GeneralComponents/Titles'
import { Container } from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { PHP } from '../../../api'
import { useMutation } from '@tanstack/react-query'

const formData = new FormData()

const NewPassword = () => {
  const [pass, setPass] = useState({
    newPass: '',
    verifyPass: '',
  })
  const [samePass, setSamePass] = useState(false)
  const navigate = useNavigate()

  let { emailHash }: any = useParams()

  const { data, mutate, isLoading } = useMutation({
    mutationKey: ['checkHashEmail'],
    mutationFn: () => PHP.UserActions(formData),
  })
  console.log(data)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    pass.newPass === pass.verifyPass ? setSamePass(true) : setSamePass(false)
    if (pass.newPass === '' || pass.verifyPass === '') setSamePass(false)

    if (samePass) {
      formData.append('newPass', pass.newPass)
      formData.append('emailHash', emailHash)
      formData.append('functionKey', '5')
      mutate()
    }
  }

  return (
    <Container>
      <>
        <form>
          <Title style={{ placeSelf: 'center', marginBottom: '.6rem' }}>
            Mude sua senha!
          </Title>

          <Input
            label="Digite uma nova senha."
            name="newpass"
            onChange={({ target }: any) =>
              setPass((prevState: any) => ({
                ...prevState,
                newPass: target.value,
              }))
            }
            placeholder="Digite uma senha segura"
            type="password"
            value={pass.newPass}
          />
          <Input
            label="Confirme sua senha"
            name="confirmpass"
            onChange={({ target }: any) =>
              setPass((prevState: any) => ({
                ...prevState,
                verifyPass: target.value,
              }))
            }
            placeholder="Igualzinho a anterior, hein!"
            type="password"
            value={pass.verifyPass}
          />

          {!samePass && (
            <>
              <Paragraph style={{ placeSelf: 'center' }}>
                As senhas devem ser iguais!
              </Paragraph>
            </>
          )}

          <Button onClick={handleSubmit}>Confirmar</Button>
        </form>
      </>
    </Container>
  )
}

export default NewPassword
