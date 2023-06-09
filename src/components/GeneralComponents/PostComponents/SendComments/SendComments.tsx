import { useState, memo } from 'react'
import { InputComment, SendCommentButton, SendCommentDiv } from './styles'
import { PHP } from '../../../../api'
import useUser from '../../../../hooks/useUser'
import { useMutationCommentsData } from '../../../../hooks/useMutationCommentsData'

const formData = new FormData()

const SendComments = ({ postCod }: any) => {
  const [comment, setComment] = useState('')
  const { user } = useUser()

  const { mutate } = useMutationCommentsData(postCod, '1')

  const sendComment = async (postCod: number) => {
    formData.append('comment', comment)
    formData.append('postCod', postCod.toString())
    formData.append('userCod', user.Cod)
    formData.append('userName', user.UserName)
    formData.append('command', '1')
    /* insere comentario no banco */
    formData.append('functionKey', '3')

    if (comment.length > 0) {
      await PHP.UserActions(formData)
      mutate()
      setComment('')
    }
  }
  return (
    <>
      <SendCommentDiv>
        <InputComment
          id={postCod}
          value={comment}
          onChange={({ target }: any) => setComment(target.value)}
          placeholder="Adicione um comentário..."
        />
        <SendCommentButton onClick={() => sendComment(postCod)}>
          Enviar
        </SendCommentButton>
      </SendCommentDiv>
    </>
  )
}

export default memo(SendComments)
