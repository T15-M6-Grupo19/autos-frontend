import { useState } from "react"
import Button from "../../Button"
import { InputComponent } from "../../InputAndLabel"
import { DivForm, FormComponent } from "./style"
import { RegisterType, User } from "./types"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { RegisterData, schema } from "./validator"
import { api } from "../../../services/api"

export const RegisterForm = ({toggleModal}: RegisterType) => {
  const [isSeller, setIsSeller] = useState(false)
  const [user, setUser] = useState<User | undefined>();
  const { register, handleSubmit, formState: {errors}} = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const handleClickType = (name: string) => {
    if(name == "anunciante"){
      setIsSeller(true)
    }
    
  }
  
  const createUser = async (data: RegisterData) => {
    if(isSeller) {
      data.account_type = "anunciante"
    }
    else {
      data.account_type = "comprador"
    }
 
    try {
      const response = await api.post<User>("/users/", data);
      
      setUser(response.data);
      toggleModal()
    } catch (error) {
      console.log(error);
    }
  };

  return (
        <FormComponent onSubmit={handleSubmit(createUser)}>
            <p>Informações pessoais</p>

            <InputComponent label="Nome" type="text" placeholder="Ex: Samuel Leão" register={register("name")} error={errors.name}/>

            <InputComponent label="Email" type="text" placeholder="Ex: samuel@kenzie.com.br" register={register("email")} error={errors.email}/>

            <InputComponent label="CPF" type="text" placeholder="000.000.000-00" register={register("CPF")} error={errors.CPF}/>

            <InputComponent label="Celular" type="text" placeholder="(DDD) 90000-0000" register={register("mobile")} error={errors.mobile}/>

            <InputComponent label="Data de nascimento" type="date" placeholder="00/00/00" register={register("birth_date")} error={errors.birth_date}/>

            <InputComponent label="Descrição" type="text" placeholder="Digitar Descrição" variant="secondary" register={register("description")} error={errors.description}/>
            
            <p>Informações de endereço</p>

            <InputComponent label="CEP" type="text" placeholder="00000.000" register={register("ZIP_code")} error={errors.ZIP_code}/>

            <DivForm>
            <InputComponent label="Estado" type="text" placeholder="Digitar Estado" variant="primary"  register={register("state")} error={errors.state}/>
            <InputComponent label="Cidade" type="text" placeholder="Digitar Cidade" variant="primary" register={register("city")} error={errors.city}/>
            </DivForm>

            <InputComponent label="Rua" type="text" placeholder="Ex: Rua Augusto Nunes" register={register("street")} error={errors.street}/>

            <DivForm>
            <InputComponent label="Número" type="text" placeholder="Digitar número" variant="primary" register={register("number")} error={errors.number}/>
            <InputComponent label="Complemento" type="text" placeholder="Ex: apart 307" variant="primary" register={register("additional_details")} error={errors.additional_details}/>
            </DivForm>
            
            <p>Tipo de conta</p>

            <DivForm>
              <Button name="Comprador" variant="tertiary" onClick={() => handleClickType("comprador")} type="button"/>
              <Button name="Anunciante" variant="tertiary" onClick={() => handleClickType("anunciante")} type="button"/>
            </DivForm>

            <InputComponent label="Senha" type="password" placeholder="Digitar senha" register={register("password")} error={errors.password}/>

            <InputComponent label="Confirmar Senha" type="password" placeholder="Digitar senha" register={register("confirmPassword")} error={errors.confirmPassword}/>
            
            <Button name="Finalizar cadastro" variant="registerButton" type="submit"/>
          </FormComponent>
    )

}