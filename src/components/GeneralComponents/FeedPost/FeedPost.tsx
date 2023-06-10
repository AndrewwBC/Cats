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
import { getPosts } from './queryPost'
import Spinner from '../Spinner/Spinner'
import AllUsers from '../AllUsers/AllUsers'
import ModalPhoto from '../ModalPhoto/ModalPhoto'
import { NavLink } from 'react-router-dom'

const FeedPost = () => {
  const [modal, setModal] = useState(false)
  const { data: posts, isLoading } = useQuery(['posts'], getPosts, {
    retry: false,
  })

  if (isLoading) return <Spinner />
  if (posts.length === 0)
    return <div style={{ height: '100vh' }}>Ainda não há postagens</div>
  else
    return (
      <>
        <Container>
          <AllUsers />
          {posts.map((item: any) => (
            <Content key={item.Post_Cod}>
              <Image
                onClick={() => setModal(item.Post_Cod)}
                style={{ cursor: 'pointer' }}
                src={`http://localhost:3001/images/${item.Img}`}
              />
              <PostInteraction>
                <IconsData item={item} />
                <UserNameDescription>
                  <NavLink
                    to={
                      item.UserName === localStorage.getItem('username')
                        ? '/userpage'
                        : `/user/${item.UserName}`
                    }
                  >
                    <User>{item.UserName}</User>
                  </NavLink>
                  <Description>{item.Description}</Description>
                </UserNameDescription>
                <Comments postCod={item.Post_Cod} />
                <SendComments postCod={item.Post_Cod} />
              </PostInteraction>
              {modal && <ModalPhoto postCod={modal} setModal={setModal} />}
            </Content>
          ))}
        </Container>
      </>
    )
}
export default memo(FeedPost)
