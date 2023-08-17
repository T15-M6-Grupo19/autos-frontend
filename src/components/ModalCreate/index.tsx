import { useContext, useEffect, useState } from "react"
import { StyledModal } from "./styles"
import { useForm} from "react-hook-form"
import { TCreateContactData, createContactSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { CarContext } from "../../providers/CarContext"

export function ModalCreate(){

    const {register, handleSubmit, formState: { errors }} = useForm<TCreateContactData>({resolver:zodResolver(createContactSchema)})
    const { cars} = useContext(CarContext)
    const [apiCar, setApiCar] = useState<any>([])
    
    useEffect(()=>{
        async function getCar(){
            const request = await fetch("https://kenzie-kars.herokuapp.com/cars")
            const response = await request.json()
            setApiCar(response)
        }
        getCar()

    },[])

    
    console.log(apiCar)

     return(

        <StyledModal  >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Create contact</h3>
                        <button  >X</button>
                    </div>
                    <h4>Informações do veículo</h4>
                    <form  >
                        <label htmlFor="fullname">Marca</label>
                        <select>
                            {
                                cars.map((car, index)=>(
                                    <option key={index}>{car.marca}</option>
                                ))
                            }
                        </select>
                        <p>{errors.fullname?.message}</p>

                        <label htmlFor="email">Modelo</label>
                        <input id="email" {...register("email")}></input>
                        <p>{errors.email?.message}</p>

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" {...register("phoneNumber")}></input>
                        <p>{errors.phoneNumber?.message}</p>

                       
                        
                        <button className="btn-create">Create Contact</button>
                    </form>
                </div>
            </div>
         
        </StyledModal>
    )
}