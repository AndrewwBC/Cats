import React, { useState, useEffect, memo } from 'react'
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
import { Button } from '../../FormComponents/Button/style'
import useUserCod from '../../../hooks/useUserCod'

const FeedPost = () => {
  const [post, setPost] = useState<any>()
  const [comment, setComment] = useState('')
  const [pushComments, setPushComments] = useState(false)

  const { userCod } = useUserCod()

  useEffect(() => {
    getInfo()
  }, [pushComments])

  async function getInfo() {
    await Services.GetPosts(setPost)
  }

  const sendComment = (postCod: number) => {
    UserRequirements.PutComment(comment, postCod, userCod)
    setComment('')
    setPushComments(!pushComments)
  }

  if (!post) return <div style={{ height: '100vh' }}>Load</div>
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

                <SendCommentDiv>
                  <InputComment
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                    placeholder="Adicione um comentário..."
                  />
                  <SendCommentButton onClick={() => sendComment(item.Post_Cod)}>
                    Enviar
                  </SendCommentButton>
                </SendCommentDiv>
              </PostInteraction>
            </Content>
          ))}
        </Container>
      </>
    )
}
export default memo(FeedPost)
