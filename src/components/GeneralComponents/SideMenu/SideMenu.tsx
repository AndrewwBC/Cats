import React from "react";
import {
  IconAndTitle,
  IconTile,
  IconsContainer,
  PostButton,
  SideContent,
  TitleButton,
} from "./styles";
import { Catgram } from "../Titles";
import { GrConfigure } from "react-icons/gr";
import { SlHome } from "react-icons/sl";
import { BsChatDots } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
const SideMenu = () => {

  function handleClick(event: any){
    console.log(event.target.to)
  }

  return (
    <>
      <SideContent>
        <TitleButton>
          <Catgram style={{ fontSize: "24px"}}>CatGram</Catgram>
        </TitleButton>
        <IconsContainer>
          <li>
            <NavLink to={"/generalfeed"} onClick={(event) => handleClick(event)}>
              <IconAndTitle>
                <SlHome size={24} />
                <IconTile>Homepage</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/generalfeed"} onClick={(event) => handleClick(event)}>
              <IconAndTitle>
                <BsChatDots size={24} />
                <IconTile>Mensagens</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/generalfeed"} onClick={(event) => handleClick(event)}>
              <IconAndTitle>
                <GrConfigure size={24} />
                <IconTile>Configurações</IconTile>
              </IconAndTitle>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/generalfeed"} onClick={(event) => handleClick(event)}>
              <IconAndTitle>
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

export default SideMenu;
