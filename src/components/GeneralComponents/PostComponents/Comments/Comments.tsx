import React, { useEffect, useState, memo, useCallback, useMemo } from 'react'
import Services from '../../../../api'
import { Container, EachComment } from './styles'
import useRender from '../../../../hooks/useRender'

const Comments = ({ postCod }: any) => {
  const [comments, setComments] = useState<boolean | any>(false)
  const { render } = useRender()

  useMemo(() => {
    Services.GetComments(setComments, postCod)
  }, [render, postCod])

  if (!comments) return <div></div>
  if (comments)
    return (
      <Container>
        {comments.map((item: any, index: number) => {
          if (index === comments.length - 1)
            return (
              <EachComment key={Math.random()}>
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
