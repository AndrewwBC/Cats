import React, { useEffect, useState, memo, useCallback } from 'react'
import Services from '../../../../api'
import { Container, EachComment, Img } from './styles'

const Comments = ({ postCod, pushComments }: any) => {
  const [comments, setComments] = useState<boolean | any>(false)

  useEffect(() => {
    Services.GetComments(setComments, postCod)
  }, [postCod, pushComments])

  if (!comments) return <div></div>
  if (comments)
    return (
      <Container>
        {comments.map((item: any, index: number) => {
          if (index === comments.length - 1)
            return (
              <EachComment key={item.Comment_Cod}>
                <div>
                  <p>pedrinho123</p>
                </div>
                <div>
                  <p>{item.Comment}</p>
                </div>
              </EachComment>
            )
        })}
      </Container>
    )
  else return <div>Insira um comentário</div>
}

export default memo(Comments)
