import React, { useState, memo } from 'react'
import { InputComment, SendCommentButton, SendCommentDiv } from './styles'
import useUserCod from '../../../../hooks/useUserCod'
import { UserRequirements } from '../../../../api'
import useRender from '../../../../hooks/useRender'

const SendComments = ({ item }: any) => {
  const [comment, setComment] = useState('')
  const { userCod } = useUserCod()
  const { render, setRender } = useRender()

  const sendComment = (postCod: number) => {
    if (comment.length > 0) {
      UserRequirements.PutComment(comment, postCod, userCod)
      setComment('')
      setRender(!render)
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
