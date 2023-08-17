import { useEffect, useState } from "react";
import LogoColors from "../../assets/MotorsColors.svg";
import Bars from "../../assets/bars.svg";
import X from "../../assets/x.svg";
import { ContainerNav } from "./styles";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ContainerNav>
      <figure>
        <img src={LogoColors} alt="Logo" />
      </figure>
      {windowWidth < 620 ? (
        <>
          {isOpen ? (
            <>
              <span onClick={() => toggleModal()}>
                <img title="opções" src={X} />
              </span>

              <div className="box-handle-mobile">
                {" "}
                <Link to="/login" className="login-link-mobile">
                  Fazer Login
                </Link>
                <Link to="/register" className="register-link-mobile">
                  Cadastrar
                </Link>
              </div>
            </>
          ) : (
            <span onClick={() => toggleModal()}>
              <img title="opções" src={Bars} />
            </span>
          )}
        </>
      ) : (
        <>
          <div className="box-handle-desktop">
            <Link to="/login" className="login-link">
              Fazer Login
            </Link>
            <Link to="/register" className="register-link">
              Cadastrar
            </Link>
          </div>
        </>
      )}
    </ContainerNav>
  );
};
