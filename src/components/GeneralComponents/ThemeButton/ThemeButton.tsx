import React, { useEffect } from 'react'
import useTheme from '../../../hooks/useTheme'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  theme && localStorage.setItem('theme', theme)
  const localTheme = localStorage.getItem('theme')

  return (
    <div>
      <button style={{ background: 'none', cursor: 'pointer' }}>
        {localTheme === 'light' ? (
          <BsMoon onClick={() => setTheme('dark')} size={28} />
        ) : (
          <BsSun onClick={() => setTheme('light')} size={28} color="orange" />
        )}
      </button>
    </div>
  )
}

export default ThemeButton
