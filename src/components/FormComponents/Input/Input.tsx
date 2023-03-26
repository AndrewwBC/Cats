import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ForgotPassword, Label, StyledInput } from './styles';
import { UserRequirements } from '../../../api';

interface InputInfo {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  forget?: any;
  accept?: string;
  onChange?: any;
  value?: any;
  setError?: any;
  setValue?: any;
  setUserError?: any;
  setEmailError?: any;
  setPassError?: any;
}

const Input = ({
  name,
  label,
  placeholder,
  type,
  accept,
  forget,
  value,
  setError,
  setValue,
  setUserError,
  setEmailError,
  setPassError,
}: InputInfo): JSX.Element => {
  const [checkUser, setCheckUser] = useState<any>();
  const [checkEmail, setCheckEmail] = useState<any>();

  if (checkUser && checkUser[0]?.Cod) {
    setUserError(false);
  } else if (checkUser) {
    setUserError(true);
  }

  if (checkEmail && checkEmail[0]?.Cod) {
    setEmailError(false);
  } else if (checkEmail) {
    setEmailError(true);
  }

  function handleChange({ target }: any) {
    setValue(target.value);
  }

  function handleBlur({ target }: any) {
    if (name === 'username') {
      UserRequirements.CheckUserName(target.value, setCheckUser);
    }

    if (type === 'email') {
      const type = {
        email: {
          regex:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Email inválido.',
        },
      };
      if (type.email.regex.test(value)) setError(true);
      if (!type.email.regex.test(value)) setError(type.email.message);
      UserRequirements.CheckEmail(target.value, setCheckEmail);
    }
    if (type === 'password') {
      if (target.value.length < 6) {
        setPassError(false);
      } else {
        setPassError(true);
      }
    }
  }

  return (
    <>
      <Label>
        {label}
        <StyledInput
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          accept={accept}
          value={value}
          onBlur={handleBlur}
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
