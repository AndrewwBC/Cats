import React, { useState, useEffect, memo, useCallback } from 'react'
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
} from './styles'
import { Button } from '../../FormComponents/Button/style'
import SideMenu from '../../GeneralComponents/SideMenu/SideMenu'
import useUser from '../../../hooks/useUser'

const UserPage = () => {
  const { user } = useUser()
  /* tratar render do botao follow */
  const [follow, setFollow] = useState<any>(false)

  function handleFollow() {
    setFollow(!follow)
  }

  if (!user) return <div style={{ height: '100vh' }}>Loading</div>
  else
    return (
      <Container>
        <Content>
          <UserData>
            <UserNamePhoto>
              <UserPhoto
                height={80}
                width={80}
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <UserName>{user.UserName}</UserName>
              {follow ? (
                <Button onClick={handleFollow}>Seguindo</Button>
              ) : (
                <Button onClick={handleFollow}>Seguir</Button>
              )}
            </UserNamePhoto>
            <UserInfo>
              <NumbersContainer>
                <Numbers>{user.Publicações}</Numbers>
                <NumbersButton>Publicações</NumbersButton>
              </NumbersContainer>
              <NumbersContainer>
                <Numbers>{user.Seguidores}</Numbers>
                <NumbersButton>Seguidores</NumbersButton>
              </NumbersContainer>
              <NumbersContainer>
                <Numbers>{user.Seguindo}</Numbers>
                <NumbersButton>Seguindo</NumbersButton>
              </NumbersContainer>
            </UserInfo>
          </UserData>
          <UserFeed>
            <FeedImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <FeedImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <FeedImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          </UserFeed>
        </Content>
      </Container>
    )
}

export default memo(UserPage)
