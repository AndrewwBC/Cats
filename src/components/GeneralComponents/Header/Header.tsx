import { Paragraph } from '../Paragraph';
import { Container, Content, Logo, Menu } from './styles';
import { NavLink } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme';

const Header = ({ user }: any) => {
  const { theme, setTheme } = useTheme();

  

  console.log(user);
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

              <img
                height={36}
                width={36}
                src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                alt=""
              />
            </NavLink>
            <div>
              <button onClick={() => setTheme(!theme)}>Tema</button>
            </div>
          </Menu>
        </Content>
      </Container>
    </>
  );
};

export default Header;
