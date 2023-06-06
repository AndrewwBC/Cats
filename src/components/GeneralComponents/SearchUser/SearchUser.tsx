import React from 'react'
import { EachUser, UserList } from '../AllUsers/styles'
import { NavLink } from 'react-router-dom'
import { UserPhoto } from '../../Routes/UserPage/styles'
import { Paragraph } from '../Paragraph'

const SearchUser = ({ users, isLoading }: any) => {
  console.log(users)
  if (isLoading) return <div>Loading</div>
  return (
    <UserList>
      {users &&
        users.map((item: any) => (
          <NavLink to={'/' + item.UserName}>
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
        ))}
    </UserList>
  )
}

export default SearchUser
