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
  onBlur?: any;
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
  setError,
  setValue,
  setUserError,
  setEmailError,
  setPassError,
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
        <ForgotPassword>
          <NavLink to="/forgotpassword">Esqueceu a senha?</NavLink>
        </ForgotPassword>
      )}
    </>
  );
};

export default Input;
