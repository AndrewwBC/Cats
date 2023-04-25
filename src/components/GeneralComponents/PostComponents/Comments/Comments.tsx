import React, { useEffect, useState, memo, useCallback, useMemo } from 'react'
import Services from '../../../../api'
import { Container, EachComment } from './styles'
import useFakeComment from '../../../../hooks/useFakeComment'

const Comments = ({ postCod }: any) => {
  const [comments, setComments] = useState<boolean | any>(false)
  const { fakeComment } = useFakeComment()

  console.log(fakeComment)

  useMemo(() => {
    Services.GetComments(setComments, postCod)
  }, [postCod])

  if (fakeComment && fakeComment.postCod === postCod)
    return (
      <EachComment>
        <div>
          <p>{fakeComment.username}</p>
        </div>
        <div>
          <p>{fakeComment.comment}</p>
        </div>
      </EachComment>
    )
  if (comments)
    return (
      <Container>
        {fakeComment.postCod === postCod ? (
          <EachComment>
            <div>
              <p>{fakeComment.username}</p>
            </div>
            <div>
              <p>{fakeComment.comment}</p>
            </div>
          </EachComment>
        ) : (
          comments.map((item: any, index: number) => {
            if (index === comments.length - 1)
              return (
                <EachComment key={Math.random()}>
                  <div>
                    <p>{item.UserName}</p>
                  </div>
                  <p>{item.Comment}</p>
                </EachComment>
              )
          })
        )}
      </Container>
    )
  else return <div>Insira um comentário</div>
}

export default memo(Comments)
