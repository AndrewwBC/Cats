import { Paragraph } from '../Paragraph'
import {
  Buttons,
  Container,
  Content,
  Menu,
  MobileLogo,
  MobileMenuButton,
  MobileMenuList,
  MobileMenuNav,
  MobileMenuOptions,
} from './styles'
import { NavLink } from 'react-router-dom'
import ThemeButton from '../ThemeButton/ThemeButton'
import { useState } from 'react'
const Header = () => {
  const [burg, setBurg] = useState<boolean>(false)

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

  function handleClick(target: HTMLButtonElement) {
    const allP = Array.from(document.getElementsByClassName('anchor'))
    allP.map((item: any) => {
      item.style.borderBottom = ''
    })
    target.style.borderBottom = '2px solid orange'
  }

  return (
    <>
      <Container>
        <Content>
          <Menu aria-aria-label="nav">
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
                <NavLink key={title} to={path}>
                  <Paragraph
                    className="anchor"
                    onClick={({ target }: any) => handleClick(target)}
                    itemProp="16px"
                  >
                    {title}
                  </Paragraph>
                </NavLink>
              ))}
            </Buttons>
            <ThemeButton />
          </Menu>
          <MobileLogo>
            <NavLink to="/">
              <img
                height={36}
                width={36}
                src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/cat-icon-11-256.png"
                alt="Icon"
              />
            </NavLink>
          </MobileLogo>
          <MobileMenuButton itemScope={burg} onClick={() => setBurg(!burg)} />
          <MobileMenuNav itemScope={burg}>
            <MobileMenuList>
              {linkTitles.map(({ title, path }) => (
                <MobileMenuOptions>
                  <NavLink key={title} to={path}>
                    <Paragraph itemProp="16px">{title}</Paragraph>
                  </NavLink>
                </MobileMenuOptions>
              ))}
              <ThemeButton />
            </MobileMenuList>
          </MobileMenuNav>
        </Content>
      </Container>
    </>
  )
}

export default Header
