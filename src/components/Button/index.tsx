import { iButton } from './types';

import { StyledButton } from './styles';

const Button = ({ onClick, name, variant, type, clicked }: iButton) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      type={type}
      clicked={clicked}
    >
      {name}
    </StyledButton>
  );
};

export default Button;
