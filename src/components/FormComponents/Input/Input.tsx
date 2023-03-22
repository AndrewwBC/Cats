import { NavLink } from 'react-router-dom';
import { ForgotPassword, Label, StyledInput } from './styles';

interface InputInfo {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  forget?: any;
  accept?: string;
  onChange: any;
}

const Input = ({
  name,
  label,
  placeholder,
  type,
  accept,
  onChange,
  forget,
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
        />
      </Label>
      {forget && (
        <ForgotPassword>
          <NavLink to="/forgotpassword">Esqueceu a senha?</NavLink>
        </ForgotPassword>
      )}
    </>
  );
};

export default Input;
