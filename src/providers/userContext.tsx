import { createContext, useState } from 'react'
import { useGetDatas } from '../hooks/useMutationUserData'

const UserContext = createContext<any>(null)

const UserStorage = ({ children }: any) => {
  const [user, setUser] = useState<any>(false)
  const [userData, setUserData] = useState<any>(false)
  const [theme, setTheme] = useState<any>(false)

  const { data, isSuccess,isLoading } = useGetDatas()
  console.log('Context')
  if (!userData && isSuccess && localStorage.getItem('token')) setUserData(data)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserStorage }
