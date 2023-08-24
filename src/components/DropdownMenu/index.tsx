import { forwardRef, useContext } from "react";
import { DropdownWrapper } from "./style";
import { Link } from "react-router-dom";
import { CarContext } from "../../providers/CarContext";

export const DropdownMenu = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const { userData } = useContext(CarContext);

  const advertiser = userData.account_type == "anunciante";

  return (
    <DropdownWrapper ref={ref}>
      <Link to="">Editar perfil</Link>
      <Link to="">Editar endereço</Link>
      {advertiser && <Link to="">Meus anúncios</Link>}
      <Link to="/login">Sair</Link>
    </DropdownWrapper>
  );
});
