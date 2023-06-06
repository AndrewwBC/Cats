import { memo } from 'react'
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
import Spinner from '../../GeneralComponents/Spinner/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Button } from '../../FormComponents/Button/style'

const UserPage = () => {
  let nave = useNavigate()

  const { username } = useParams()

  const {
    data: userData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      return axios
        .get(`http://localhost/ReactPHP/getOneUser.php?userName=${username}`)
        .then((res) => res)
    },
  })
  console.log(userData?.data)
  if (isLoading) return <Spinner />
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
                alt=""
              />
              <UserName>{userData && userData.data.userName}</UserName>
              <Button>Seguir</Button>
            </UserNamePhoto>
            <UserInfo>
              {userData &&
                userData.data.userNumbers.map((item: any, index: number) => (
                  <NumbersContainer key={index}>
                    <Numbers>{item[1]}</Numbers>
                    <NumbersButton>{item[0]}</NumbersButton>
                  </NumbersContainer>
                ))}
            </UserInfo>
          </UserData>
          <UserFeed>
            {userData &&
              userData.data.posts.map((item: any, index: number) =>
                item === null ? null : (
                  <div key={index}>
                    <FeedImg src={`http://localhost:3001/images/${item.Img}`} />
                  </div>
                ),
              )}
          </UserFeed>
        </Content>
      </Container>
    )
  } else return null
}

export default memo(UserPage)
