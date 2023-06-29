import { memo, useEffect, useState } from "react";
import {
  Container,
  Content,
  FeedImg,
  Numbers,
  NumbersButton,
  NumbersContainer,
  UserData,
  UserFeed,
  UserInfo,
  UserName,
  UserNamePhoto,
  UserPhoto,
} from "./styles";
import Spinner from "../../GeneralComponents/Spinner/Spinner";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetDatas } from "../../../hooks/useMutationUserData";
import FollowersModal from "../../GeneralComponents/FollowersModal/FollowersModal";
import FollowingModal from "../../GeneralComponents/FollowingModal/FollowingModal";

const UserPage = () => {
  const [modal, setModal] = useState<boolean | string>(false);
  let nave = useNavigate();
  console.log(modal);
  document.title = "Seu Perfil";

  useEffect(() => {
    if (localStorage.getItem("admAuth")) {
      nave("/generalfeed");
    }
    let token = localStorage.getItem("token");
    if (!token) nave("/");
  }, []);
  const { data: userData, isLoading: isLoadUser, isSuccess } = useGetDatas();
  if (isLoadUser) return <Spinner />;
  else if (isSuccess) {
    return (
      <Container>
        <Content>
          <UserData>
            <UserNamePhoto>
              <UserPhoto
                height={80}
                width={80}
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Foto de perfil"
              />
              <UserName>{userData.userName}</UserName>
            </UserNamePhoto>
            <UserInfo>
              {userData.userNumbers.map((item: string, index: number) => (
                <NumbersContainer key={index}>
                  <Numbers>{item[1]}</Numbers>
                  <NumbersButton
                    style={{ cursor: "pointer" }}
                    id={item[0]}
                    onClick={({ target }: any) => setModal(target.id)}
                  >
                    {item[0]}
                  </NumbersButton>
                </NumbersContainer>
              ))}
            </UserInfo>
          </UserData>
          <UserFeed>
            {userData.posts.map((item: any, index: number) =>
              item === null ? null : (
                <div key={index}>
                  <FeedImg src={`http://localhost:3001/images/${item.Img}`} />
                </div>
              )
            )}
          </UserFeed>
          {modal === "Seguidores" && (
            <FollowersModal username={userData.userName} setModal={setModal} />
          )}
          {modal === "Seguindo" && (
            <FollowingModal username={userData.userName} setModal={setModal} />
          )}
        </Content>
      </Container>
    );
  } else return null;
};

export default memo(UserPage);
