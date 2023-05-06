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

const FeedPost = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
  } = useQuery(['posts'], getPosts, {
    retry: false,
  })

  console.log(posts)

  if (isLoading) return <div style={{ height: '100vh' }}>Carregando</div>
  else if (isSuccess)
    return (
      <>
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {posts.map((item: any) => (
            <Content key={item.Post_Cod}>
              <Image src={`http://localhost:3001/images/${item.Img}`} />

              <PostInteraction>
                <IconsData item={item} />
                <UserNameDescription>
                  <div>
                    <User>Drew123</User>
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
  else return <></>
}
export default FeedPost
