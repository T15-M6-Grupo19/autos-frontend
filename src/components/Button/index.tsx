import { iButton } from "./types";

import { StyledButton } from "./styles";

const Button = ({ onClick, name, variant, type }: iButton) => {
  return (
    <StyledButton variant={variant} onClick={onClick} type={type}>
      {name}
    </StyledButton>
  );
};

export default Button;
