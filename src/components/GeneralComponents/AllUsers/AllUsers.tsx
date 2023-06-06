import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { Container, Content, EachUser, Filter, UserList } from './styles'
import SearchUser from '../SearchUser/SearchUser'
import { useGetDatas } from '../../../hooks/useMutationUserData'

const AllUsers = () => {
  const [filter, setFilter] = useState('')

  const { data: userLoggedIn, isLoading: loadUser } = useGetDatas()

  const {
    data: users,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['users', filter],
    queryFn: () => {
      return axios
        .get(`http://localhost/ReactPHP/getAllUsers.php?userFilter=${filter}`)
        .then((res) => res)
    },
  })

  if (loadUser) return <></>

  return (
    <>
      <Container>
        <Filter
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
          name="filter"
          placeholder="Procure um usuário"
          type="text"
        />
        <Content>
          {users && (
            <SearchUser
              isLoading={isLoading}
              loadUser={loadUser}
              users={users.data}
              userLogged={userLoggedIn.userName}
            />
          )}
        </Content>
      </Container>
    </>
  )
}

export default AllUsers
