import React, { useState, memo } from 'react'
import { InputComment, SendCommentButton, SendCommentDiv } from './styles'
import { UserRequirements } from '../../../../api'
import useFakeComment from '../../../../hooks/useFakeComment'
import useUser from '../../../../hooks/useUser'

const SendComments = ({ item }: any) => {
  const [comment, setComment] = useState('')
  const { user } = useUser()
  const { setFakeComment } = useFakeComment()

  const sendComment = (postCod: number) => {
    if (comment.length > 0) {
      // Insere comentario no banco
      setFakeComment({
        comment: comment,
        username: user.userData.UserName,
        postCod: postCod,
      })
      UserRequirements.PutComment(
        comment,
        postCod,
        user.userData.Cod,
        user.userData.UserName,
      )
      setComment('')
    }
  }
  return (
    <>
      <SendCommentDiv>
        <InputComment
          id={item}
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          placeholder="Adicione um comentário..."
        />
        <SendCommentButton onClick={() => sendComment(item)}>
          Enviar
        </SendCommentButton>
      </SendCommentDiv>
    </>
  )
}

export default memo(SendComments)
