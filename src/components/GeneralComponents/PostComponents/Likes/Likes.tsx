import React, { useState, memo, useCallback } from 'react'
import Services from '../../../../api'
import { Like } from './styles'
import { LikeText } from '../../FeedPost/styles'

let likeCount = 0

const Likes = ({ like }: any) => {
  console.log(like)

  return like === 0 ? (
    <LikeText>Seja o primeiro a curtir</LikeText>
  ) : likeCount === 1 ? (
    <LikeText>{like + likeCount} curtidas</LikeText>
  ) : (
    <LikeText>{like - likeCount} curtida</LikeText>
  )
}
export default Likes
