import React from 'react'
import useTheme from '../../../hooks/useTheme'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button
        style={{ background: 'none', cursor: 'pointer' }}
        onClick={() => setTheme(!theme)}
      >
        {theme ? <BsMoon size={28} /> : <BsSun size={28} color="orange" />}
      </button>
    </div>
  )
}

export default ThemeButton
