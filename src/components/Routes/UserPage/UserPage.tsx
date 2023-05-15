import { useState, memo, useContext } from 'react'
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
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Spinner from '../../GeneralComponents/Spinner/Spinner'
import { UserContext } from '../../../providers/userContext'

const UserPage = () => {
  const { userData, isLoading: isLoadUser } = useContext(UserContext)

  const getUserPosts = async () => {
    const req = await axios.get(
      'http://localhost/ReactPHP/Funções/PostsData.php',
      {
        params: {
          token: localStorage.getItem('token'),
          functionKey: '4',
        },
      },
    )
    const res = await req.data
    return res
  }

  const { data: eachPost, isLoading } = useQuery({
    queryKey: ['getUserPosts'],
    queryFn: () => getUserPosts(),
  })

  if (isLoading && isLoadUser) return <Spinner />
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
              <UserName>{userData.userName}</UserName>
            </UserNamePhoto>
            <UserInfo>
              <NumbersContainer>
                <Numbers>{userData.Publicações}</Numbers>
                <NumbersButton>Publicações</NumbersButton>
              </NumbersContainer>
              <NumbersContainer>
                <Numbers>{userData.Seguidores}</Numbers>
                <NumbersButton>Seguidores</NumbersButton>
              </NumbersContainer>
              <NumbersContainer>
                <Numbers>{userData.Seguindo}</Numbers>
                <NumbersButton>Seguindo</NumbersButton>
              </NumbersContainer>
            </UserInfo>
          </UserData>
          <UserFeed>
            {eachPost &&
              eachPost.map((item: any) => (
                <div key={item.Post_Cod}>
                  <FeedImg src={`http://localhost:3001/images/${item.Img}`} />
                </div>
              ))}
          </UserFeed>
        </Content>
      </Container>
    )
}

export default memo(UserPage)
