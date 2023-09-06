import { Modal } from "..";
import { DivForm } from "../ModalEditUser/styles";
import { ModalContent } from "./styles";

type TModalOpenPhoto = {
    toggleModalOpenPhotos: () => void
    photo: string
}

export const ModalOpenPhoto = ({ photo, toggleModalOpenPhotos }: TModalOpenPhoto) => {
    return (
      <Modal toggleModal={toggleModalOpenPhotos}>
        <ModalContent onClick={e => e.stopPropagation()}>
            <DivForm>
                <h2>Imagem do veículo</h2>
                <button onClick={toggleModalOpenPhotos}>X</button>
            </DivForm>
          <img src={photo}/>
        </ModalContent>
      </Modal>
    );
  }
  