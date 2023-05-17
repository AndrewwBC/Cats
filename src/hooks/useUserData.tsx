import { useContext, memo } from 'react'
import { UserContext } from '../providers/userContext'

function useUserData() {
  const { userData, setUserData } = useContext(UserContext)
  return {
    userData ,
    setUserData ,
  }
}

export default useUserData
