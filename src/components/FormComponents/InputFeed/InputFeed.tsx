import React, { useState, memo, useEffect } from 'react'
import { InputComment } from './styles'

const InputFeed = ({ value, setValue }: any) => {
  const [comm, setComm] = useState('')

  useEffect(() => {
    console.log('oi')
    setComm('')
  }, [value])

  setValue(comm)

  return (
    <InputComment
      placeholder="Adicione um comentário..."
      value={comm}
      onChange={({ target }) => setComm(target.value)}
    />
  )
}

export default memo(InputFeed)
