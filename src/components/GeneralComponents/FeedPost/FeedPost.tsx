import React, { useState, useEffect, memo, useCallback } from 'react'
import Services, { UserRequirements } from '../../../api'
import {
  Container,
  Content,
  Description,
  Image,
  InputComment,
  PostInteraction,
  User,
  UserNameDescription,
  LikeText,
  SendCommentDiv,
  SendCommentButton,
} from './styles'
import Comments from '../PostComponents/Comments/Comments'
import IconsData from '../PostComponents/IconsData/IconsData'
import useUserCod from '../../../hooks/useUserCod'
import useRender from '../../../hooks/useRender'
import InputFeed from '../../FormComponents/InputFeed/InputFeed'
import SendComments from '../PostComponents/SendComments/SendComments'

const FeedPost = () => {
  const [post, setPost] = useState<any>()
  const [comment, setComment] = useState('')
  const [pushComments, setPushComments] = useState(false)

  const { userCod } = useUserCod()
  const { render, setRender } = useRender()

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = useCallback(async () => {
    await Services.GetPosts(setPost)
  }, [])

  if (!post) return <div style={{ height: '100vh' }}>Carregando</div>
  else
    return (
      <>
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {post.map((item: any) => (
            <Content key={item.Post_Cod}>
              <div>
                <Image src={`http://localhost:3001/images/${item.Img}`} />
              </div>
              <PostInteraction>
                <IconsData postCod={item.Post_Cod} />
                {item.Likes === 0 ? (
                  <LikeText>Seja o primeiro a curtir</LikeText>
                ) : item.Likes > 1 ? (
                  <LikeText>{item.Likes} curtidas</LikeText>
                ) : (
                  <LikeText>{item.Likes} curtida</LikeText>
                )}
                <UserNameDescription>
                  <div>
                    <User>Drew123</User>
                  </div>
                  <Description>{item.Description}</Description>
                </UserNameDescription>
                <Comments postCod={item.Post_Cod} pushComments={pushComments} />
                <SendComments item={item.Post_Cod} />
              </PostInteraction>
            </Content>
          ))}
        </Container>
      </>
    )
}
export default memo(FeedPost)
