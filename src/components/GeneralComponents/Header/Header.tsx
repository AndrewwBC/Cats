import { Paragraph } from '../Paragraph'
import { Container, Content, Logo, Menu } from './styles'
import { NavLink } from 'react-router-dom'
import useTheme from '../../../hooks/useTheme'
import SideMenu from '../SideMenu/SideMenu'
import useUser from '../../../hooks/useUser'
import { BsSun, BsMoon } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import ThemeButton from '../ThemeButton/ThemeButton'
const Header = () => {
  const { theme, setTheme } = useTheme()
  const { user } = useUser()

  if (user) return <SideMenu />
  else
    return (
      <>
        <Container>
          <Content>
            <NavLink to="/">
              <Logo>
                <img
                  height={36}
                  width={36}
                  src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/cat-icon-11-256.png"
                  alt="Icon"
                />
              </Logo>
            </NavLink>

            <Menu>
              <NavLink
                style={{ display: 'flex', alignItems: 'center' }}
                to={user ? '/userpage' : '/login'}
              >
                {user ? (
                  <Paragraph itemProp="16px">{user}</Paragraph>
                ) : (
                  <Paragraph itemProp="16px">Entrar / Cadastrar</Paragraph>
                )}
              </NavLink>
              <AiOutlineUser size={28} />
            </Menu>
            <ThemeButton />
          </Content>
        </Container>
      </>
    )
}

export default Header
