import { useContext, memo } from 'react'
import { UserContext } from '../providers/userContext'

function useUser() {
  const { user, setUser } = useContext(UserContext)
  return {
    user,
    setUser,
  }
}

export default useUser
