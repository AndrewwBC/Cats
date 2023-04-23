import React, { createContext, useState } from 'react'

const UserContext = createContext<any>(null)

const UserStorage = ({ children }: any) => {
  const [user, setUser] = useState<any>('')
  const [theme, setTheme] = useState<any>(false)
  const [userCod, setUserCod] = useState<any>('')

  return (
    <UserContext.Provider
      value={{ user, setUser, theme, setTheme, userCod, setUserCod }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserStorage }
