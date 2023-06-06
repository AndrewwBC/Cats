import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { Container, Content, EachUser, Filter, UserList } from './styles'
import { UserPhoto } from '../../Routes/UserPage/styles'
import { Paragraph } from '../Paragraph'
import { NavLink } from 'react-router-dom'
import Input from '../../FormComponents/Input/Input'
import SearchUser from '../SearchUser/SearchUser'

const AllUsers = () => {
  const [filter, setFilter] = useState('')
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
          {users && <SearchUser isLoading={isLoading} users={users.data} />}
        </Content>
      </Container>
    </>
  )
}

export default AllUsers
