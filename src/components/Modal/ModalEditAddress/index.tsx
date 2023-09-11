import { useContext } from "react";
import { Modal } from ".."
import Button from "../../Button";
import { InputComponent } from "../../InputAndLabel";
import { HeaderModalStyle, ModalContainerStyle, SpaceToButtonsStyle, SpaceToTwoInputsStyle } from "./style";
import { CarContext } from "../../../providers/CarContext";
import { useForm } from "react-hook-form";
// import { RegisterData } from "../../Form/RegisterForm/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditAddress, EditAddressSchema } from "./valdiators";

interface IModalEditAddress {
     toggleModal: () => void;
}

export const ModalEditAddress = ({toggleModal}:IModalEditAddress) => {
     const { setEditAddress, updateAddress, userData } = useContext(CarContext);

     const { register, handleSubmit, formState: { errors }, } = useForm<EditAddress>({
          resolver: zodResolver(EditAddressSchema),
     });
     
     return (
          <Modal toggleModal={toggleModal}>
               <ModalContainerStyle onSubmit={handleSubmit(updateAddress)}>
                    <HeaderModalStyle>
                         <h4>Editar endereço</h4>
                         <button onClick={()=>setEditAddress(false)}>X</button>
                    </HeaderModalStyle>
                    <h4>Informações de endereço</h4>
                    <InputComponent defaultValue={userData.ZIP_code} register={register('ZIP_code')} error={errors.ZIP_code} label="CEP" placeholder="88888.00" />
                    <SpaceToTwoInputsStyle>
                         <InputComponent defaultValue={userData.state} register={register('state')} error={errors.state} label="Estado" placeholder="Paraná"/>
                         <InputComponent defaultValue={userData.city} register={register('city')} error={errors.city} label="Cidade" placeholder="Curitiba"/>
                    </SpaceToTwoInputsStyle>
                    <InputComponent  defaultValue={userData.street} register={register('street')} error={errors.street} label="Rua" placeholder="Rua do Parana"/>
                    <SpaceToTwoInputsStyle>
                         <InputComponent  defaultValue={userData.number} register={register('number')} error={errors.number} label="Numero" placeholder="1029"/>
                         <InputComponent  defaultValue={userData.additional_details} register={register('additional_details')} error={errors.additional_details}label="Complemento" placeholder="Apart 12"/>
                    </SpaceToTwoInputsStyle>
                    <SpaceToButtonsStyle>
                         <Button name="Cancelar"  variant='Ver Detalhes' onClick={()=>setEditAddress(false)} />
                         <Button type="submit" name="Confirmar alterações" variant="Disable" />
                    </SpaceToButtonsStyle>

               </ModalContainerStyle>

          </Modal>
     )
}