import { memo, useContext, useEffect } from 'react'
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
import { UserContext } from '../../../providers/userContext'
import useUser from '../../../hooks/useUser'
import { useMutationUserData } from '../../../hooks/useMutationUserData'
import { useNavigate } from 'react-router-dom'
import useUserPost from '../../../hooks/useUserData'

const UserPage = () => {
  let nave = useNavigate()
  const { setUser } = useUser()
  const { setUserData } = useUserPost()
  let token = localStorage.getItem('token')
  if (!token) nave('/')
  const {
    mutate,
    data: userData,
    isLoading: isLoadUser,
    isSuccess,
  } = useMutationUserData()

  useEffect(() => {
    setUser(true)
    mutate()
  }, [token])

  if (isLoadUser) return <Spinner />
  else if (isSuccess) {
    setUserData(userData)
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
              {userData.userNumbers.map((item: any, index: number) => (
                <NumbersContainer key={index}>
                  <Numbers>{item[1]}</Numbers>
                  <NumbersButton>{item[0]}</NumbersButton>
                </NumbersContainer>
              ))}
            </UserInfo>
          </UserData>
          <UserFeed>
            {userData.posts.map((item: any, index: number) => (
              <div key={index}>
                <FeedImg src={`http://localhost:3001/images/${item.Img}`} />
              </div>
            ))}
          </UserFeed>
        </Content>
      </Container>
    )
  } else return null
}

export default UserPage
