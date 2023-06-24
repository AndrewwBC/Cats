import React, { useEffect } from 'react'
import { Container, Content } from './styles'
import FeedPost from '../../GeneralComponents/FeedPost'
import { useNavigate } from 'react-router-dom'

const GeneralFeed = () => {
  const nave = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) nave('/')
  }, [])

  document.title = 'Feed'

  return (
    <>
      <Container>
        <Content>
          <FeedPost />
          {/* <button onClick={envioMassa}>Envio em Massa</button> */}
        </Content>
      </Container>
    </>
  )
}

export default GeneralFeed
