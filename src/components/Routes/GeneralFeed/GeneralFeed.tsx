import React, { useEffect, useState } from 'react'
import { PHP } from '../../../api'
import { Container, Content } from './styles'
import FeedPost from '../../GeneralComponents/FeedPost'
import { useNavigate } from 'react-router-dom'

const GeneralFeed = () => {
  const nave = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) nave('/')
  }, [])

  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <Content>
          <FeedPost />
          {/* <button onClick={envioMassa}>Envio em Massa</button> */}
        </Content>
      </Container>
    </>
  )
}

export default GeneralFeed
