import React, { memo, useContext, useState, useEffect } from "react";
import {
  IconAndTitle,
  IconTitle,
  IconsContainer,
  Modal,
  SideContent,
  TitleButton,
} from "./styles";
import { Catgram } from "../Titles";
import { CiSettings } from "react-icons/ci";
import { SlHome } from "react-icons/sl";
import { BsChatDots } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiUserSettingsLine, RiAdminFill } from "react-icons/ri";
import { BiPlusCircle } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import PostPhoto from "../PostPhoto/PostPhoto";
import ThemeButton from "../ThemeButton/ThemeButton";
import useUser from "../../../hooks/useUser";
import { useMutationUserData } from "../../../hooks/useMutationUserData";
import UtilitiesModal from "../UtilitiesModal/UtilitiesModal";
import "./styles.css";
import useUserData from "../../../hooks/useUserData";

const SideMenu = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [utilities, setUtilities] = useState(false);
  const { setUserData } = useUserData();
  let token = localStorage.getItem("token");

  const {
    mutate,
    data: userData,
    isLoading: isLoadUser,
    isSuccess,
  } = useMutationUserData();

  useEffect(() => {
    mutate();
  }, [token]);

  function logOut() {
    localStorage.clear();
    setUserData(false);
    navigate("");
  }
  if (isLoadUser) return <div></div>;
  else if (isSuccess)
    return (
      <>
        <SideContent>
          <TitleButton>
            <Catgram style={{ fontSize: "18px" }}>{userData.userName}</Catgram>
          </TitleButton>

          <IconsContainer>
            <li>
              <IconAndTitle style={{ border: "none" }}>
                <ThemeButton />
              </IconAndTitle>
            </li>
            <li>
              <NavLink to={"/generalfeed"}>
                <IconAndTitle>
                  <SlHome color="orange" size={24} />
                  <IconTitle>Homepage</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>
            {localStorage.getItem("admAuth") && (
              <li>
                <NavLink to={"/dashboard"}>
                  <IconAndTitle>
                    <RiAdminFill color="orange" size={24} />
                    <IconTitle>ADM</IconTitle>
                  </IconAndTitle>
                </NavLink>
              </li>
            )}

            {!localStorage.getItem("admAuth") && (
              <li>
                <NavLink to={"/userpage"}>
                  <IconAndTitle>
                    <CgProfile color="orange" size={24} />
                    <IconTitle>Perfil</IconTitle>
                  </IconAndTitle>
                </NavLink>
              </li>
            )}

            <Modal>
              <RiUserSettingsLine
                color="orange"
                onClick={() => setUtilities(!utilities)}
                size={24}
              />
            </Modal>

            <li className="list">
              <NavLink to={"/generalfeed"}>
                <IconAndTitle>
                  <BsChatDots color="orange" size={24} />
                  <IconTitle>Mensagens</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>

            <li className="list">
              <NavLink to={"/usersettings"}>
                <IconAndTitle>
                  <CiSettings color="orange" size={26} />
                  <IconTitle>Configurações</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to={"/"}>
                <IconAndTitle color="orange" onClick={logOut}>
                  <IoMdLogOut color="orange" size={24} />
                  <IconTitle>Sair</IconTitle>
                </IconAndTitle>
              </NavLink>
            </li>

            <li>
              <IconAndTitle onClick={() => setModal(true)}>
                <BiPlusCircle color="orange" size={24} />
                <IconTitle>Postar</IconTitle>
              </IconAndTitle>
              {modal && <PostPhoto setModal={setModal} />}
            </li>
          </IconsContainer>
        </SideContent>
        {utilities && <UtilitiesModal setModal={setUtilities} />}
      </>
    );
  else return null;
};

export default memo(SideMenu);
