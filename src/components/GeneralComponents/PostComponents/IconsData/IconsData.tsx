import React, { useCallback, useEffect, useState } from 'react'
import { Content, Icons } from './styles'
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegPaperPlane,
} from 'react-icons/fa'
import { PHP } from '../../../../api'
import { LikeText } from '../../FeedPost/styles'
import useUserData from '../../../../hooks/useUserData'
import { QueryGetHeart, useMutationHeart } from './queryHeart'

const formData = new FormData()

const IconsData = ({ item }: any) => {
  const { userData } = useUserData()
  const [count, setCount] = useState(0)

  const token: any = localStorage.getItem('token')
  console.log('Oi')
  const {
    data: heartData,
    isLoading,
    isSuccess,
  } = QueryGetHeart(item.Post_Cod, token, 3)

  const { mutate, isLoading: loadMutate } = useMutationHeart(
    item.Post_Cod,
    token,
    3,
  )
  console.log(heartData)
  const userLikes = async (command: boolean) => {
    formData.append('postCod', item.Post_Cod)
    formData.append('userCod', userData.userCod)
    formData.append('userName', userData.userName)
    formData.append('typeOfChange', command ? '1' : '0')
    formData.append('functionKey', '4')
    command ? setCount(count + 1) : setCount(count - 1)
    await PHP.UserActions(formData)
    mutate()
  }

  if (isLoading && loadMutate) return <div></div>
  if (isSuccess)
    return (
      <Content>
        <div>
          <Icons>
            {heartData ? (
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
  else return <></>
}

export default IconsData
