import React, { useState, useEffect } from 'react'
import { Content, Icons } from './styles'
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
} from 'react-icons/fa'
import { PHP } from '../../../../api'
import useUser from '../../../../hooks/useUser'
import { LikeText } from '../../FeedPost/styles'
import { useQueryCommentsData } from '../../../../hooks/useMutationCommentsData'

const formData = new FormData()

const IconsData = ({ item }: any) => {
  const { user } = useUser()
  const [heart, setHeart] = useState<any>(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    PHP.GetHeart(setHeart, item.Post_Cod, user.Cod, 3)
  }, [item.Post_Cod])

  const userLikes = async (command: boolean) => {
    formData.append('postCod', item.Post_Cod)
    formData.append('userCod', user.Cod)
    formData.append('userName', user.UserName)
    formData.append('typeOfChange', command ? '1' : '0')
    formData.append('functionKey', '4')

    command ? setCount(count + 1) : setCount(count - 1)

    await PHP.UserActions(formData)
    setHeart(!heart)
  }

  return (
    <Content>
      <div>
        <Icons>
          {heart ? (
            <FaHeart
              style={{ cursor: 'pointer' }}
              onClick={() => userLikes(false)}
              size={window.innerWidth < 550 ? 20 : 22}
              color="red"
            />
          ) : (
            <FaRegHeart
              style={{ cursor: 'pointer' }}
              onClick={() => userLikes(true)}
              size={window.innerWidth < 550 ? 20 : 22}
            />
          )}
          <FaRegComment
            style={{ cursor: 'pointer' }}
            size={window.innerWidth < 550 ? 20 : 22}
          />
          <FaRegPaperPlane
            style={{ cursor: 'pointer' }}
            size={window.innerWidth < 550 ? 20 : 22}
          />
        </Icons>
        <div>
          {item.Likes + count === 0 ? (
            <LikeText>Seja o primeiro a curtir</LikeText>
          ) : item.Likes + count === 1 ? (
            <LikeText>
              {item.Likes + count}{' '}
              {item.Likes + count > 1 ? 'curtidas' : 'curtida'}
            </LikeText>
          ) : (
            <LikeText>{item.Likes + count} curtidas</LikeText>
          )}
        </div>
      </div>
    </Content>
  )
}

export default IconsData
