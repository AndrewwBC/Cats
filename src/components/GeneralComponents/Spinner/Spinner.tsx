import React from 'react'
import { SpinnerContainer, SpinnerImage } from './styles'

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerImage src="data:image/png;base64,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"></SpinnerImage>
    </SpinnerContainer>
  )
}

export default Spinner