import { iButton } from './types';

import { StyledButton } from './styles';

const Button = ({
  onClick,
  name,
  variant,
  type,
  clicked,
  disabled,
}: iButton) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      type={type}
      clicked={clicked}
      disabled={disabled}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
