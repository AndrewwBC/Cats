import { memo } from 'react'
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

const FeedPost = () => {
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
          {posts.map((item: any) => (
            <Content key={item.Post_Cod}>
              <Image src={`http://localhost:3001/images/${item.Img}`} />

              <PostInteraction>
                <IconsData item={item} />
                <UserNameDescription>
                  <div>
                    <User>{item.UserName}</User>
                  </div>
                  <Description>{item.Description}</Description>
                </UserNameDescription>
                <Comments postCod={item.Post_Cod} />
                <SendComments postCod={item.Post_Cod} />
              </PostInteraction>
            </Content>
          ))}
        </Container>
      </>
    )
}
export default memo(FeedPost)
