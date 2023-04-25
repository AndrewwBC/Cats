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
  const [data, setData] = useState<any>(false)
  const [follow, setFollow] = useState<any>(false)

  function handleFollow() {
    setFollow(!follow)
  }

  if (!user.userData) return <div style={{ height: '100vh' }}>Loading</div>
  else
    return (
      <Container>
        <Content>
          <SideMenu />
          <UserData>
            <UserNamePhoto>
              <UserPhoto
                height={80}
                width={80}
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <UserName>{user.userData.UserName}</UserName>
              {follow ? (
                <Button onClick={handleFollow} style={{ padding: '4px 14px' }}>
                  Seguindo
                </Button>
              ) : (
                <Button onClick={handleFollow} style={{ padding: '4px 14px' }}>
                  Seguir
                </Button>
              )}
            </UserNamePhoto>
            <UserInfo>
              <NumbersContainer>
                <Numbers>{user.userData.Publicações}</Numbers>
                <NumbersButton>teste</NumbersButton>
              </NumbersContainer>
              <NumbersContainer>
                <Numbers>{user.userData.Seguidores}</Numbers>
                <NumbersButton>teste</NumbersButton>
              </NumbersContainer>
              <NumbersContainer>
                <Numbers>{user.userData.Seguindo}</Numbers>
                <NumbersButton>teste</NumbersButton>
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
