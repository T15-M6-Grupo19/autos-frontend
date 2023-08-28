import { forwardRef, useContext, useEffect, useState } from "react";
import { DropdownWrapper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { CarContext } from "../../providers/CarContext";
import { UserContext } from "../../providers/UserContext/UserContext";

export const DropdownMenu = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const navigate = useNavigate();
  const { specificUser, getUserById, loading } = useContext(UserContext);
  const [userIsAdvertiser, setUserIsAdvertiser] = useState(false);

  const getLocalStorageItem = () => {
    if (localStorage.getItem("@account_type")) {
      const account_type = localStorage.getItem("@account_type");
      console.log(account_type);
      if (account_type === "anunciante") {
        setUserIsAdvertiser(true);
      }
    }
  };

  useEffect(() => {
    getLocalStorageItem();
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
          {userIsAdvertiser && <Link to="">Meus anúncios</Link>}
          {specificUser?.account_type === "anunciante" ? (
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
