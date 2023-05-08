import { useState } from 'react'
import {
  Container,
  Content,
  AsideMenu,
  ResetUserName,
  ResetPassword,
  ChangeOption,
  ResetContainer,
} from './styles'
import { Title } from '../../GeneralComponents/Titles'
import Input from '../../FormComponents/Input/Input'
import { Button } from '../../FormComponents/Button/style'

const UserSettings = () => {
  const [changeContainer, setChangeContainer] = useState(true)
  const [newUsername, setNewUsername] = useState({
    newUsername: '',
    password: '',
  })
  const [newPassword, setNewPassword] = useState({
    currentPass: '',
    newPass: '',
    verifyNewPass: '',
  })

  console.log(newUsername, newPassword)

  return (
    <Container>
      <Content>
        <AsideMenu>
          <ChangeOption onClick={() => setChangeContainer(true)}>
            Mudar nome de usuário
          </ChangeOption>
          <ChangeOption onClick={() => setChangeContainer(false)}>
            Mudar Senha
          </ChangeOption>
        </AsideMenu>
        <ResetContainer>
          {changeContainer ? (
            <ResetUserName>
              <Title style={{ fontSize: '1.4rem' }}>
                Mude aqui o seu nome de usuário.
              </Title>
              <Input
                label="Novo nome de usuário"
                placeholder="@joaozinho"
                name="newusername"
                type="text"
                onChange={({ target }: any) =>
                  setNewUsername((prevState: any) => ({
                    ...prevState,
                    newUsername: target.value,
                  }))
                }
              />
              <Input
                label="Digite a senha"
                placeholder="Shiii, é segredo!"
                name="password"
                type="password"
                onChange={({ target }: any) =>
                  setNewUsername((prevState: any) => ({
                    ...prevState,
                    password: target.value,
                  }))
                }
              />
              <Button>Enviar</Button>
            </ResetUserName>
          ) : (
            <ResetPassword>
              {' '}
              <Title style={{ fontSize: '1.4rem' }}>Mude sua senha aqui.</Title>
              <Input
                label="Digite sua senha atual"
                placeholder="Shiii, é segredo!"
                name="newusername"
                type="text"
                onChange={({ target }: any) =>
                  setNewPassword((prevState: any) => ({
                    ...prevState,
                    currentPass: target.value,
                  }))
                }
              />
              <Input
                label="Sua nova senha aqui!"
                placeholder="Shiii, é segredo!"
                name="password"
                type="password"
                onChange={({ target }: any) =>
                  setNewPassword((prevState: any) => ({
                    ...prevState,
                    newPass: target.value,
                  }))
                }
              />
              <Input
                label="Confirme sua nova senha"
                placeholder="Shiii, é segredo!"
                name="password"
                type="password"
                onChange={({ target }: any) =>
                  setNewPassword((prevState: any) => ({
                    ...prevState,
                    verifyNewPass: target.value,
                  }))
                }
              />
              <Button>Enviar</Button>
            </ResetPassword>
          )}
        </ResetContainer>
      </Content>
    </Container>
  )
}

export default UserSettings
