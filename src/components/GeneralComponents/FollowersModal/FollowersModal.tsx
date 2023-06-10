import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Container, Content } from './styles'
import { NavLink } from 'react-router-dom'
import { EachUser } from '../AllUsers/styles'
import { UserPhoto } from '../../Routes/UserPage/styles'
import { Paragraph } from '../Paragraph'

export const FollowersModal = ({ username, setModal }: any) => {
  const {
    data: followersList,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['followers'],
    queryFn: () => {
      return axios
        .get(`http://localhost/ReactPHP/followers.php?username=${username}`)
        .then((res) => res)
    },
  })
  console.log(followersList)
  window.addEventListener('click', ({ target }: any) => {
    if (target.id === 'outModal') setModal(false)
  })

  followersList && console.log(followersList)

  if (isLoading) return <></>
  if (followersList?.status === 204) {
    return (
      <Container id="outModal">
        <Content>
          <Paragraph style={{ placeSelf: 'center' }}>
            Não possui seguidores
          </Paragraph>
        </Content>
      </Container>
    )
  }
  if (isSuccess)
    return (
      <Container id="outModal">
        <Content>
          <Paragraph>Seguidores</Paragraph>

          {followersList &&
            followersList.data.map((item: any) => {
              return (
                <NavLink to={'/user/' + item.UserName}>
                  <EachUser>
                    <UserPhoto
                      height={54}
                      width={54}
                      src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <Paragraph>{item.UserName}</Paragraph>
                  </EachUser>
                </NavLink>
              )
            })}
        </Content>
      </Container>
    )
  else {
    return <></>
  }
}

export default FollowersModal
