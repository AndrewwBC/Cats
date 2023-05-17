import { createContext, useState } from 'react'

const UserContext = createContext<any>(null)

const UserStorage = ({ children }: any) => {
  const [user, setUser] = useState<any>(false)
  const [userData, setUserData] = useState<any>(false)
  const [theme, setTheme] = useState<any>(false)

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
