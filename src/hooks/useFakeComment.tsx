import { useContext } from 'react'
import { UserContext } from '../providers/userContext'

function useFakeComment() {
  const { fakeComment, setFakeComment } = useContext(UserContext)
  return {
    fakeComment,
    setFakeComment,
  }
}

export default useFakeComment
