import { useContext } from 'react'
import { UserContext } from '../providers/userContext'

function useRender() {
  const { render, setRender } = useContext(UserContext)
  return {
    render,
    setRender,
  }
}

export default useRender
