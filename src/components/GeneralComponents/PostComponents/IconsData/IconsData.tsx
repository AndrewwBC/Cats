import React, { useState, useCallback, memo, useEffect } from 'react'
import { Content, Icon, Icons } from './styles'
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
} from 'react-icons/fa'
import Services, { UserRequirements } from '../../../../api'
import useUser from '../../../../hooks/useUser'

const IconsData = ({ postCod }: any) => {
  const { user } = useUser()
  const [like, setLike] = useState(false)
  const [response, setResponse] = useState<any>()

  const userLikes = (command: boolean) => {
    UserRequirements.PutLikes(postCod, user.userData.Cod, command)
    setLike(!like)
    setResponse(!response)
  }

  useEffect(() => {
    Services.GetLikes(setResponse, postCod, user.userData.Cod)
  }, [postCod])

  return (
    <Content>
      <Icons>
        {response ? (
          <FaHeart
            style={{ cursor: 'pointer' }}
            onDoubleClick={() => userLikes(false)}
            size={22}
            color="red"
          />
        ) : (
          <FaRegHeart
            style={{ cursor: 'pointer' }}
            onDoubleClick={() => userLikes(true)}
            size={22}
          />
        )}
        <FaRegComment style={{ cursor: 'pointer' }} size={22} />
        <FaRegPaperPlane style={{ cursor: 'pointer' }} size={22} />
      </Icons>
      <div>
        <span>20/03/2023</span>
      </div>
    </Content>
  )
}

export default memo(IconsData)
