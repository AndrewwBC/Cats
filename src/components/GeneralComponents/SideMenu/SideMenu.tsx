import React, { memo, useCallback} from "react";
import {
  IconAndTitle,
  IconTile,
  IconsContainer,
  PostButton,
  SideContent,
  TitleButton,
} from "./styles";
import { Catgram, Title } from "../Titles";
import { CiSettings } from "react-icons/ci";
import { SlHome } from "react-icons/sl";
import { BsChatDots } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import {CgProfile} from 'react-icons/cg'
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";



const SideMenu = () => {
  const navigate = useNavigate()

  const {  user,setUser } = useUser()

  function logOut(){
    setUser('')
    navigate('')
  }

  return (
    <>
      <SideContent>
        <TitleButton>
          <Catgram style={{ fontSize: "18px"}}>{user}</Catgram>
        </TitleButton>
      
        <IconsContainer>
          <li>
            <NavLink to={"/generalfeed"}>
              <IconAndTitle>
                <SlHome size={24} />
                <IconTile>Homepage</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/generalfeed"}>
              <IconAndTitle>
                <CgProfile size={24} />
                <IconTile>Perfil</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/generalfeed"}>
              <IconAndTitle>
                <BsChatDots size={24} />
                <IconTile>Mensagens</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/generalfeed"}>
              <IconAndTitle>
                <CiSettings size={26} />
                <IconTile>Configurações</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li style={{flexGrow: '1'}}>
          <NavLink to={"/"}>
              <IconAndTitle  onClick={logOut}>
                <IoMdLogOut size={24} />
                <IconTile>Sair</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>
        </IconsContainer>
      </SideContent>
    </>
  );
};

export default memo(SideMenu);
