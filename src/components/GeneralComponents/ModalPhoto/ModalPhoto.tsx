import { memo, useState } from 'react'
import {
  Container,
  Content,
  Description,
  Image,
  PostInteraction,
  User,
  UserNameDescription,
} from './styles'
import Comments from '../PostComponents/Comments/Comments'
import IconsData from '../PostComponents/IconsData/IconsData'
import SendComments from '../PostComponents/SendComments/SendComments'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../Spinner/Spinner'
import AllUsers from '../AllUsers/AllUsers'
import axios from 'axios'
import CommentsModal from '../CommentsModal/CommentsModal'
import { NavLink } from 'react-router-dom'

const ModalPhoto = ({ adm, postCod, setModal }: any) => {
  const {
    data: post,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['post', postCod],
    queryFn: () => {
      return axios
        .get(`http://localhost/ReactPHP/getPost.php?postCod=${postCod}`)
        .then((res) => res.data)
    },
  })

  window.addEventListener('click', ({ target }: any) => {
    if (target.id === 'outModal') setModal(false)
  })
  console.log(post)
  if (isLoading) return <></>
  else if (isSuccess)
    return (
      <Container id="outModal">
        <Content key={post.Post_Cod}>
          <Image src={`http://localhost:3001/images/${post.Img}`} />
          <PostInteraction>
            <UserNameDescription>
              <div>
                <NavLink
                  to={
                    post.UserName === localStorage.getItem('username')
                      ? '/userpage'
                      : `/user/${post.UserName}`
                  }
                >
                  <User>{post.UserName}</User>
                </NavLink>
              </div>
              <Description>{post.Description}</Description>
            </UserNameDescription>
            <CommentsModal postCod={post.Post_Cod} />
            {!adm && <IconsData item={post} />}
            {!adm && <SendComments postCod={post.Post_Cod} />}
          </PostInteraction>
        </Content>
      </Container>
    )
  else {
    return null
  }
}
export default ModalPhoto
