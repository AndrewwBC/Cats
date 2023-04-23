import React, { useState, memo, useCallback } from 'react'
import Services from '../../../../api'
import { Like } from './styles'

const Likes = (postCod: any) => {
  const [likes, setLikes] = useState<boolean | any>(false)

  useCallback(() => {
    getLikes()
  }, [postCod.postCod])

  async function getLikes() {
    await Services.GetLikes(setLikes, postCod.postCod, false)
  }

  if (likes) return <Like>{likes.length} curtida</Like>
  else return <div>Oi</div>
}

export default memo(Likes)
