import React from 'react'
import { Content, IconTitle, Modal } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import { IconAndTitle } from '../SideMenu/styles'
import { BsChatDots } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { IoMdLogOut } from 'react-icons/io'

const UtilitiesModal = ({ setModal }: any) => {
  const navigate = useNavigate()

  function logOut() {
    setModal(false)
    localStorage.clear()
    navigate('/')
  }

  window.addEventListener('click', ({ target }: any) => {
    if (target.id === 'outModal') setModal(false)
  })

  return (
    <Modal id="outModal">
      <Content style={{ marginTop: '120px' }} id="modal">
        <NavLink to={'/generalfeed'}>
          <IconAndTitle>
            <BsChatDots size={20} />
            <IconTitle>Mensagens</IconTitle>
          </IconAndTitle>
        </NavLink>
        <NavLink to={'/usersettings'}>
          <IconAndTitle>
            <CiSettings size={20} />
            <IconTitle>Configurações</IconTitle>
          </IconAndTitle>
        </NavLink>
        <NavLink to={'/generalfeed'}>
          <IconAndTitle onClick={logOut}>
            <IoMdLogOut size={20} />
            <IconTitle>Sair</IconTitle>
          </IconAndTitle>
        </NavLink>
      </Content>
    </Modal>
  )
}

export default UtilitiesModal
