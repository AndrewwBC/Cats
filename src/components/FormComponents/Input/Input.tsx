import { Label, StyledInput } from './styles';

interface InputInfo {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

const Input = ({ name, label, placeholder, type }: InputInfo): JSX.Element => {
  return (
    <>
      <Label>
        {label}
        <StyledInput type={type} name={name} placeholder={placeholder} />
      </Label>
    </>
  );
};

export default Input;
