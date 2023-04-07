import { useState, useEffect, useContext } from 'react';
import { Paragraph } from '../Paragraph';
import { Container, Content, Logo, Menu } from './styles';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../Hook/userContext';

const Header = () => {
  let usuario = useContext(UserContext);
  console.log(usuario);

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
          <NavLink to="login">
            <Menu>
              {usuario.user ? (
                <Paragraph itemProp="16px">{usuario.user}</Paragraph>
              ) : (
                <Paragraph itemProp="16px">Entrar / Cadastrar</Paragraph>
              )}

              <img
                height={36}
                width={36}
                src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                alt=""
              />
            </Menu>
          </NavLink>
        </Content>
      </Container>
    </>
  );
};

export default Header;
