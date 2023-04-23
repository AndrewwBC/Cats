import { useContext } from 'react'
import { UserContext } from '../providers/userContext'

function useUserCod() {
  const { userCod, setUserCod } = useContext(UserContext)
  return {
    userCod,
    setUserCod
  }
}

export default useUserCod
