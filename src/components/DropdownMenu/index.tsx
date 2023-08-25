import { forwardRef, useContext, useEffect, useState } from "react";
import { DropdownWrapper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { CarContext } from "../../providers/CarContext";
import { UserContext } from "../../providers/UserContext/UserContext";

export const DropdownMenu = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  // const { userData } = useContext(CarContext);
  const navigate = useNavigate();
  const { specificUser, getUserById, setSpecificUser, loading } =
    useContext(UserContext);
  const [numberOfAds, setNumberOfAds] = useState(0);

  const token = localStorage.getItem("@TOKEN");
  console.log(specificUser?.ads.length);

  useEffect(() => {
    const { ads } = specificUser;
    // setSpecificUser(null);
    getUserById();
  }, []);

  const handleLogoutClick = () => {
    navigate("/login");
    localStorage.removeItem("@TOKEN");
  };
  {
    return (
      !loading && (
        <DropdownWrapper ref={ref}>
          <Link to="">Editar perfil</Link>
          <Link to="">Editar endereço</Link>
          {specificUser?.ads.length > 0 && specificUser?.ads != undefined ? (
            <Link to="">Meus anúncios</Link>
          ) : null}
          <Link to="/login" onClick={handleLogoutClick}>
            Sair
          </Link>
        </DropdownWrapper>
      )
    );
  }
});
