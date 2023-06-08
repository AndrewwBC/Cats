import React, { useState } from 'react'
import { Button } from '../../FormComponents/Button/style'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const FollowButton = ({ otherUsercod }: any) => {
  const [follow, setFollow] = useState(false)

  const myToken = localStorage.getItem('token')

  const {
    refetch,
    data: isFollowed,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['isFollowed', follow],
    queryFn: () => {
      return axios
        .get(
          `http://localhost/ReactPHP/isFollowed.php?otherUsercod=${otherUsercod}&myToken=${myToken}`,
        )
        .then((res) => res)
    },
  })

  async function addFollow() {
    try {
      const request = await axios.get(
        `http://localhost/ReactPHP/followActions.php?followAction=adicionar&otherUsercod=${otherUsercod}&myToken=${myToken}`,
      )
      console.log(request)
      return request.data
    } catch (err) {
      console.log(err)
      return err
    }
  }

  async function removeFollow() {
    try {
      const request = await axios.get(
        `http://localhost/ReactPHP/followActions.php?followAction=remover&otherUsercod=${otherUsercod}&myToken=${myToken}`,
      )
      console.log(request)
      return request.data
    } catch (err) {
      console.log(err)
      return err
    }
  }

  function handleFollow(target: any) {
    target.id === 'Seguindo' ? removeFollow() : addFollow()
    setFollow(!follow)
    refetch()
  }

  if (isLoading) return <div></div>
  if (isSuccess)
    return (
      <Button
        id={isFollowed.data ? 'Seguindo' : 'Seguir'}
        onClick={({ target }) => handleFollow(target)}
      >
        {isFollowed.data ? 'Seguindo' : 'Seguir'}
      </Button>
    )
  else {
    return <div></div>
  }
}

export default FollowButton
