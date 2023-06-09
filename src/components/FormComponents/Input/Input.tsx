import { NavLink } from 'react-router-dom'
import { ForgotPass, Label, StyledInput } from './styles'

interface InputInfo {
  label: string
  name: string
  placeholder: string
  type: string
  forget?: boolean
  accept?: string
  onChange?: any
  value?: string
  onBlur?: any
}

const Input = ({
  name,
  label,
  placeholder,
  type,
  accept,
  forget,
  value,
  onChange,
  onBlur,
}: InputInfo): JSX.Element => {
  return (
    <>
      <Label>
        {label}
        <StyledInput
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          accept={accept}
          value={value}
          onBlur={onBlur}
        />
      </Label>
      {forget && (
        <ForgotPass>
          <NavLink to="/forgotpassword">Esqueceu a senha?</NavLink>
        </ForgotPass>
      )}
    </>
  )
}

export default Input
