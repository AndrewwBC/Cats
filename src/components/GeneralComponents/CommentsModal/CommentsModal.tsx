import {
  Comment,
  CommentText,
  Container,
  EachComment,
  Nickname,
  UserPhoto,
} from './styles'
import { useQueryCommentsData } from '../../../hooks/useMutationCommentsData'
import { NavLink } from 'react-router-dom'

const CommentsModal = ({ postCod }: any) => {
  const {
    data: comments,
    isSuccess,
    isLoading,
  } = useQueryCommentsData(postCod, '1')
  if (isLoading) return <div></div>
  if (!comments.data) return <div></div>
  if (comments && isSuccess)
    return (
      <Container>
        {comments.data.map((item: any, index: number) => {
          return (
            <NavLink to={`/user/${item.UserName}`}>
              <EachComment key={item.Comment_Cod}>
                <UserPhoto
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Foto de perfil"
                />
                <CommentText>
                  <Nickname>{item.UserName}</Nickname>
                  <Comment>{item.Comment}</Comment>
                </CommentText>
              </EachComment>
            </NavLink>
          )
        })}
      </Container>
    )
  else return <></>
}

export default CommentsModal
