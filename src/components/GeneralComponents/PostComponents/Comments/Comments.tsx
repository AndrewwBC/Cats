import { memo, useCallback, useEffect } from 'react'
import { Container, EachComment } from './styles'
import { useQueryCommentsData } from '../../../../hooks/useMutationCommentsData'

const Comments = ({ postCod }: any) => {
  const {
    data: comments,
    isSuccess,
    isLoading,
  } = useQueryCommentsData(postCod, '1')

  console.log(comments)

  if (comments && isSuccess)
    return (
      <Container>
        {comments.data.map((item: any, index: number) => {
          if (index === comments.data.length - 1 && item.Post_Cod == postCod)
            return (
              <EachComment key={item.Comment_Cod}>
                <div>
                  <p>{item.UserName}</p>
                </div>
                <p>{item.Comment}</p>
              </EachComment>
            )
        })}
      </Container>
    )
  else return <></>
}

export default Comments
