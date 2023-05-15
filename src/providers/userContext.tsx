import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { createContext, useState } from 'react'

const UserContext = createContext<any>(null)

const UserStorage = ({ children }: any) => {
  const [user, setUser] = useState<any>(false)
  const [theme, setTheme] = useState<any>(false)

  const getUserDatas = async () => {
    try {
      const req = await axios.get(
        'http://localhost/ReactPHP/Usuário/getUserDatas.php',
        {
          params: {
            token: localStorage.getItem('token'),
          },
        },
      )
      const res = await req.data
      return res
    } catch (error) {
      return error
    }
  }

  const { data: userData, isLoading } = useQuery({
    queryKey: ['userData'],
    queryFn: () => getUserDatas(),
  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        userData,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserStorage }
