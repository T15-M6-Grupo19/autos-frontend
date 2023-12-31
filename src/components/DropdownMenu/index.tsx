import { forwardRef, useContext, useEffect, useState } from "react";
import { DropdownWrapper } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { CarContext } from "../../providers/CarContext";
import { UserContext } from "../../providers/UserContext/UserContext";

export const DropdownMenu = forwardRef<
  HTMLDivElement,
  React.RefObject<HTMLDivElement>
>((ref) => {
  const navigate = useNavigate();
  const { specificUser, getUserById, loading, userId  } = useContext(UserContext);
  const [userIsAdvertiser, setUserIsAdvertiser] = useState(false);
  const {setEditAddress, setEditUserModal} = useContext(CarContext)

  const getLocalStorageItem = () => {
    if (localStorage.getItem("@account_type")) {
      const account_type = localStorage.getItem("@account_type");
    
      if (account_type === "anunciante") {
        setUserIsAdvertiser(true);
      }
    }
  };

  useEffect(() => {
    getLocalStorageItem();
    getUserById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogoutClick = () => {
    navigate("/login");
    localStorage.removeItem("@TOKEN");
  };
  {
    return (
      !loading && (
        <DropdownWrapper ref={ref}>
          <Link to="" onClick={() => setEditUserModal(true)}>Editar perfil</Link>
          <Link to="" onClick={() => setEditAddress(true)}>Editar endereço</Link>
          {userIsAdvertiser && <Link to="">Meus anúncios</Link>}
          {specificUser?.account_type === "anunciante" ? (
            <Link to={`/profile/${userId}`}>Meus anúncios</Link>
          ) : null}
          <Link to="/login" onClick={handleLogoutClick}>
            Sair
          </Link>
        </DropdownWrapper>
      )
    );
  }
});
