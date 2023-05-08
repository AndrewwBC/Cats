import React, { memo, useCallback, useState } from 'react'
import {
  IconAndTitle,
  IconTitle,
  IconsContainer,
  SideContent,
  TitleButton,
} from './styles'
import { Catgram, Title } from '../Titles'
import { CiSettings } from 'react-icons/ci'
import { SlHome } from 'react-icons/sl'
import { BsChatDots } from 'react-icons/bs'
import { IoMdLogOut } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { BiPlusCircle } from 'react-icons/bi'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import PostPhoto from '../PostPhoto/PostPhoto'
import ThemeButton from '../ThemeButton/ThemeButton'

const SideMenu = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUser()
  const [modal, setModal] = useState(false)

  function logOut() {
    localStorage.clear()
    setUser(false)
    navigate('')
  }

  if (!user) return <div></div>
  if (user)
    return (
      <>
        <SideContent>
          <TitleButton>
            <Catgram style={{ fontSize: '18px' }}>{user.UserName}</Catgram>
          </TitleButton>

          <IconsContainer>
            <li>
              <IconAndTitle style={{ border: 'none' }}>
                <ThemeButton />
              </IconAndTitle>
            </li>
            <li>
              <NavLink to={'/generalfeed'}>
                <IconAndTitle>
                  <SlHome size={24} />
                  <IconTitle>Homepage</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>

            <li>
              <NavLink to={'/userpage'}>
                <IconAndTitle>
                  <CgProfile size={24} />
                  <IconTitle>Perfil</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>

            <li>
              <NavLink to={'/generalfeed'}>
                <IconAndTitle>
                  <BsChatDots size={24} />
                  <IconTitle>Mensagens</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>

            <li>
              <NavLink to={'/usersettings'}>
                <IconAndTitle>
                  <CiSettings size={26} />
                  <IconTitle>Configurações</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>

            <li>
              <NavLink to={'/'}>
                <IconAndTitle onClick={logOut}>
                  <IoMdLogOut size={24} />
                  <IconTitle>Sair</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>
            <li>
              <IconAndTitle onClick={() => setModal(true)}>
                <BiPlusCircle size={24} />
                <IconTitle>Postar</IconTitle>
              </IconAndTitle>
              {modal && <PostPhoto setModal={setModal} />}
            </li>
          </IconsContainer>
        </SideContent>
      </>
    )
  else return <div></div>
}

export default memo(SideMenu)
