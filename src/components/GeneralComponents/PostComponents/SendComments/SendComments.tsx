import { useState, memo, useContext } from 'react'
import { InputComment, SendCommentButton, SendCommentDiv } from './styles'
import { PHP } from '../../../../api'
import useUser from '../../../../hooks/useUser'
import { useMutationCommentsData } from '../../../../hooks/useMutationCommentsData'
import { UserContext } from '../../../../providers/userContext'
import useUserData from '../../../../hooks/useUserData'

const formData = new FormData()

const SendComments = ({ postCod }: any) => {
  const [comment, setComment] = useState('')
  const {userData} = useUserData()
  const { mutate } = useMutationCommentsData(postCod, '1')

  const sendComment = async (postCod: number) => {
    formData.append('comment', comment)
    formData.append('postCod', postCod.toString())
    formData.append('userCod', userData.userCod)
    formData.append('userName', userData.userName)
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
