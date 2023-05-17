import { Paragraph } from '../Paragraph'
import { Buttons, Container, Content, Menu } from './styles'
import { NavLink } from 'react-router-dom'
import useTheme from '../../../hooks/useTheme'
import SideMenu from '../SideMenu/SideMenu'
import ThemeButton from '../ThemeButton/ThemeButton'
const Header = () => {
  const { theme, setTheme } = useTheme()

  const linkTitles = [
    {
      title: 'Sobre',
      path: '/about',
    },
    {
      title: 'Contato',
      path: '/contact',
    },
    {
      title: 'FeedBack',
      path: '/feedback',
    },
    {
      title: 'Acessar',
      path: '/login',
    },
  ]

  return (
    <>
      <Container>
        <Content>
          <Menu>
            <NavLink to="/">
              <img
                height={36}
                width={36}
                src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/cat-icon-11-256.png"
                alt="Icon"
              />
            </NavLink>
            <Buttons>
              {linkTitles.map(({ title, path }) => (
                <NavLink to={path}>
                  <Paragraph itemProp="16px">{title}</Paragraph>
                </NavLink>
              ))}
            </Buttons>
            <ThemeButton />
          </Menu>
        </Content>
      </Container>
    </>
  )
}

export default Header
