import React, { createContext, useState } from 'react'

const UserContext = createContext<any>(null)

const UserStorage = ({ children }: any) => {
  const [user, setUser] = useState<any>(false)
  const [theme, setTheme] = useState<any>(false)
  const [render, setRender] = useState(false)
  const [fakeComment, setFakeComment] = useState(false)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        render,
        setRender,
        fakeComment,
        setFakeComment,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserStorage }
