import React, { useEffect, useState } from 'react'
import {
  Container,
  Content,
  EachUser,
  Icons,
  NameAndEmail,
  Users,
} from './styles'
import axios from 'axios'
import { Title } from '../../GeneralComponents/Titles'
import Spinner from '../../GeneralComponents/Spinner/Spinner'
import { UserPhoto } from '../UserPage/styles'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import { MdDelete } from 'react-icons/md'
import ModalPhoto from '../../GeneralComponents/ModalPhoto/ModalPhoto'
import { useNavigate } from 'react-router-dom'
const formData = new FormData()

const Adm = () => {
  const [codUserToDelete, setCodUserToDelete] = useState('')
  const [codPostToDelete, setCodPostToDelete] = useState('')
  const [data, setData] = useState([])
  const [postData, setPostData] = useState([])
  const [load, setLoad] = useState(false)
  const [render, setRender] = useState(false)
  const [modal, setModal] = useState('')

  const nave = useNavigate()

  useEffect(() => {
    //Pode usar o promise all
    getUsers()
    getPosts()
  }, [render])

  const getUsers = async () => {
    formData.append('functionKey', '1')
    try {
      setLoad(true)
      const response = await axios.post(
        'http://localhost/ReactPHP/Adm/Actions.php',
        formData,
      )
      console.log(response.data)
      setData(response.data)
      return response.data
    } catch (err) {
      console.log(err)
      return err
    } finally {
      setLoad(false)
    }
  }
  const getPosts = async () => {
    formData.append('functionKey', '4')
    try {
      setLoad(true)
      const response = await axios.post(
        'http://localhost/ReactPHP/Adm/Actions.php',
        formData,
      )
      setPostData(response.data)
      return response.data
    } catch (err) {
      console.log(err)
      return err
    } finally {
      setLoad(false)
    }
  }

  const deleteUser = async (id: string) => {
    formData.append('userCod', id)
    formData.append('functionKey', '2')
    console.log(id)
    try {
      const response = await axios.post(
        'http://localhost/ReactPHP/Adm/Actions.php',
        formData,
      )
      return response.data
    } catch (err) {
      console.log(err)
      return err
    } finally {
      setRender(!render)
    }
  }

  const deletePost = async (id: string) => {
    formData.append('postCod', id)
    formData.append('functionKey', '3')

    try {
      const response = await axios.post(
        'http://localhost/ReactPHP/Adm/Actions.php',
        formData,
      )
      const data = response
      return data
    } catch (err) {
      console.log(err)
      return err
    } finally {
      setRender(!render)
    }
  }

  function modalPhoto(cod: string) {
    setModal(cod)
  }

  if (load) return <Spinner />
  return (
    <Container>
      <Content>
        <Users>
          <Title style={{ marginBottom: '24px' }}>Usuários</Title>
          {data &&
            data.map((item: any) => {
              return (
                <EachUser onClick={() => nave(`/user/${item.UserName}`)}>
                  <UserPhoto
                    height={60}
                    width={60}
                    src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Foto de perfil"
                  />
                  <NameAndEmail>
                    <Paragraph>{item.UserName}</Paragraph>
                    <Paragraph>{item.Email}</Paragraph>
                  </NameAndEmail>
                  <Icons>
                    <Paragraph style={{ color: '#bcbcbc' }}>
                      #{item.Cod}
                    </Paragraph>
                    <MdDelete
                      onClick={() => deleteUser(item.Cod)}
                      size={24}
                      color="red"
                    />
                  </Icons>
                </EachUser>
              )
            })}
        </Users>
        <Users>
          <Title style={{ marginBottom: '24px' }}>Postagens</Title>
          {postData &&
            postData.map((item: any) => {
              return (
                <EachUser onClick={() => modalPhoto(item.Post_Cod)}>
                  <UserPhoto
                    height={60}
                    width={60}
                    src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Foto de perfil"
                  />
                  <NameAndEmail>
                    <Paragraph>{item.UserName}</Paragraph>
                    <Paragraph>{item.Description}</Paragraph>
                  </NameAndEmail>
                  <Icons>
                    <Paragraph style={{ color: '#bcbcbc' }}>
                      #{item.Post_Cod}
                    </Paragraph>
                    <MdDelete
                      onClick={() => deletePost(item.Post_Cod)}
                      size={24}
                      color="red"
                    />
                  </Icons>
                </EachUser>
              )
            })}
        </Users>
        {modal && <ModalPhoto adm={true} postCod={modal} setModal={setModal} />}
      </Content>
    </Container>
  )
}

export default Adm
