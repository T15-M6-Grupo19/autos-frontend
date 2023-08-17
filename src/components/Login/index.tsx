import { EmailLabel, LoginContainer, LoginContainerTitle } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginBar = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Informe um email")
      .email("Digite um formato de email válido"),
    password: yup.string().required("Informe sua senha"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function loginForm(data){
    return console.log(data)
  }

  return (
    <LoginContainer>
      <LoginContainerTitle className="textHeading5500">
        Login
      </LoginContainerTitle>
      <form onSubmit = {handleSubmit(loginForm)}>
        <EmailLabel htmlFor="email">Email</EmailLabel>
        <input
          id="email"
          placeholder="Digite seu Email"
          {...register("email")}
        ></input>
        <p>{errors.email?.message}</p>
        <label>Senha</label>
        <input></input>
        <p>{errors.password?.message}</p>
        <p>esqueci minha senha</p>
        <button>Entrar</button>
        <p>ainda não possúi conta?</p>
        <button>Cadastrar</button>
      </form>
    </LoginContainer>
  );
};
export default LoginBar;
