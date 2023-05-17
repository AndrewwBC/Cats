import React, { memo, useContext, useState, useEffect } from 'react'
import {
  IconAndTitle,
  IconTitle,
  IconsContainer,
  SideContent,
  TitleButton,
} from './styles'
import { Catgram } from '../Titles'
import { CiSettings } from 'react-icons/ci'
import { SlHome } from 'react-icons/sl'
import { BsChatDots } from 'react-icons/bs'
import { IoMdLogOut } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { BiPlusCircle } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import PostPhoto from '../PostPhoto/PostPhoto'
import ThemeButton from '../ThemeButton/ThemeButton'
import { UserContext } from '../../../providers/userContext'
import Spinner from '../Spinner'
import useUser from '../../../hooks/useUser'
import { useMutationUserData } from '../../../hooks/useMutationUserData'

const SideMenu = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const {setUser} = useUser()

  let token = localStorage.getItem('token')

  const {mutate, data: userData, isLoading: isLoadUser, isSuccess} = useMutationUserData()
  
  useEffect(() => {
    mutate()
  }, [token])

  function logOut() {
    localStorage.clear()
    navigate('')
  }
  if(isLoadUser) return <div></div>
  else if(isSuccess)
  return (
    <>
      <SideContent>
        <TitleButton>
          <Catgram style={{ fontSize: '18px' }}>{userData.userName}</Catgram>
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
  else return null
}

export default memo(SideMenu)
