import { InputProps } from './types';
import { InputStructure, StyledInputField } from './styles';

export const InputComponent = ({ label, variant, register, error,...props }: InputProps) => {
  return (
    <InputStructure>
      {label && <label htmlFor={label}>{label}</label>}
      <StyledInputField  {...props} variant={variant} id={label}  {...register} />
      {error ?<p>{error.message}</p>: null}
    </InputStructure>
  );
};

