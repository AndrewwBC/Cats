import React, { memo, useCallback } from 'react'
import {
  IconAndTitle,
  IconTitle,
  IconsContainer,
  PostButton,
  SideContent,
  TitleButton,
} from './styles'
import { Catgram, Title } from '../Titles'
import { CiSettings } from 'react-icons/ci'
import { SlHome } from 'react-icons/sl'
import { BsChatDots } from 'react-icons/bs'
import { IoMdLogOut } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import useUser from '../../../hooks/useUser'

const SideMenu = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  function logOut() {
    localStorage.clear()
    setUser(false)
    navigate('')
  }

  if (!user.userData) return <div></div>
  if (user.userData)
    return (
      <>
        <SideContent>
          <TitleButton>
            <Catgram style={{ fontSize: '18px' }}>
              {user.userData.UserName}
            </Catgram>
          </TitleButton>

          <IconsContainer>
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
              <NavLink to={'/generalfeed'}>
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
          </IconsContainer>
        </SideContent>
      </>
    )
  else return <div></div>
}

export default memo(SideMenu)
