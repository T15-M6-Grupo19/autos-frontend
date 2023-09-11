import { useState } from "react";
import Button from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { NavBar } from "../../components/NavBar";
import { DivStructure, MainStructure, ModalRegisterSucess } from "./style";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate()

  const toggleModal = () => setIsOpenModal(!isOpenModal);
  
  return (
    <>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <ModalRegisterSucess>
            <div>
              <h3>Sucesso!</h3>
              <button onClick={toggleModal}>X</button>
            </div>
              <h3>Sua conta foi criada com sucesso!</h3>
              <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
              <Button name="Ir para o login" variant="primary" onClick={() => navigate("/login")}/>
          </ModalRegisterSucess>
        </Modal>
      )}

      <NavBar />
      <MainStructure>
        <DivStructure>

          <h2 className="textHeading7500">Cadastro</h2>
          <RegisterForm toggleModal={toggleModal}/>

        </DivStructure>
      </MainStructure>
      <Footer />
    </>
  );
};

export default Register;
