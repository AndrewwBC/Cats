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
import { LikeText } from '../../FeedPost/styles'

const IconsData = ({ item }: any) => {
  const { user } = useUser()
  const [heart, setHeart] = useState<any>()

  useEffect(() => {
    Services.GetHeart(setHeart, item.Post_Cod, user.userData.Cod)
  }, [item.Post_Cod])

  const userLikes = async (command: boolean) => {
    await UserRequirements.PutLikes(
      item.Post_Cod,
      user.userData.Cod,
      user.userData.UserName,
      command,
    )
    setHeart(!heart)
  }
  console.log(heart)
  return (
    <Content>
      <Icons>
        {heart ? (
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

export default IconsData
