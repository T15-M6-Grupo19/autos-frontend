import { useForm } from "react-hook-form";
import { Modal } from ".."
import Button from "../../Button";
import { InputComponent } from "../../InputAndLabel";
import { DivForm, DivFormButton, ModalEditUserDiv, SeparateInputs } from "./styles";
import { UserUpdate } from "./types";
import { UpdateData, schemaUpdateUser } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/api";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../../../providers/CarContext";
import { Link } from "react-router-dom";

type TModalEditUserProp = {
    toggleModal: () => void;
}

export const ModalEditUser = ({toggleModal}: TModalEditUserProp) => {
    const navigate = useNavigate()
    const [userUpdated, setUserUpdated] = useState<UserUpdate | undefined>()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateData>({
        resolver: zodResolver(schemaUpdateUser),
    });
    const { userData } = useContext(CarContext);

    const refreshPage = () => {
        window.location.reload(false)
    }
    
    const updateUser = async (updatedData: UpdateData) => {
        const token = localStorage.getItem('@TOKEN');    
        
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token!)}`;
        
        if(token){
            const { sub }: string = jwt_decode(token)
            try {
                const response = await api.patch<UserUpdate>(`/users/${sub}`, updatedData);
                toggleModal()
                refreshPage()
        } catch (error) {
            console.log(error);
            
        }
      }
    }

    const deleteUser = async () => {
        const token = localStorage.getItem('@TOKEN');    
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token!)}`;
        
        if(token){
            const { sub }: string = jwt_decode(token)
            try {
            const response = await api.delete<UserUpdate>(`/users/${sub}`);
            localStorage.removeItem('@TOKEN')
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
      }
    }

    
    

    return(
        <Modal toggleModal={toggleModal}>
            <ModalEditUserDiv onSubmit={handleSubmit(updateUser)}>
           
            <DivForm>

                <h2>Editar perfil</h2>
                <button onClick={toggleModal}>X</button>
            </DivForm>
                <p>Informações pessoais</p>
            <InputComponent defaultValue={userData.name} label="Nome" type='text' placeholder='Ex: Samuel Leão' register={register("name")} error={errors.name}/>
            <InputComponent defaultValue={userData.email} label="Email" type='email' placeholder='samuel@kenzie.com.br' register={register("email")} error={errors.email}/>
            <SeparateInputs>
            <InputComponent defaultValue={userData.CPF} label="CPF" type='text' placeholder='900.880.090-00' register={register("CPF")} error={errors.CPF}/>
            <InputComponent defaultValue={userData.mobile} label="Celular" type='text' placeholder='(084) 90909-9092' register={register("mobile")} error={errors.mobile}/>
            </SeparateInputs>
            <InputComponent defaultValue={userData.birth_date} label="Data de nascimento" type='date' placeholder='09/12/99' register={register("birth_date")} error={errors.birth_date}/>
            <InputComponent defaultValue={userData.description} label="Descrição" type='text' placeholder='Digitar Descrição' variant='secondary' register={register("description")} error={errors.description}/>
           
            <DivFormButton>
                <Button name="Cancelar" variant="editUserCancel" onClick={() => toggleModal()}/>
                <Button name="Excluir Perfil" variant="editUserDelete" onClick={() => deleteUser()}/>
                <Button name="Salvar alterações" variant="editUserConfirm" type="submit"/>
            </DivFormButton>
            
            </ModalEditUserDiv>
        </Modal>
    )
}