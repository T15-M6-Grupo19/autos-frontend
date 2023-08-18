import {
  EmailInput,
  EmailLabel,
  ForgetPassword,
  ForgetPasswordAlign,
  LoginButton,
  LoginContainer,
  LoginContainerTitle,
  PasswordInput,
  PasswordLabel,
  RegisterButton,
  TextAccount,
  TextAlign,
} from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

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

  async function loginForm(data) {
    return console.log(data);
  }

  return (
    <LoginContainer>
      <LoginContainerTitle className="textHeading5500">
        Login
      </LoginContainerTitle>
      <form onSubmit={handleSubmit(loginForm)}>
        <EmailLabel>Email</EmailLabel>
        <EmailInput
          id="email"
          placeholder="Digite seu Email"
          {...register("email")}
        ></EmailInput>
        <p>{errors.email?.message}</p>
        <PasswordLabel>Senha</PasswordLabel>
        <PasswordInput
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        ></PasswordInput>
        <p>{errors.password?.message}</p>
        <ForgetPasswordAlign>
          <ForgetPassword>Esqueci minha senha</ForgetPassword>
        </ForgetPasswordAlign>
        <LoginButton>Entrar</LoginButton>
        <TextAlign>
          <TextAccount className="body2400">
            Ainda não possui conta?
          </TextAccount>
        </TextAlign>
        <RegisterButton>Cadastrar</RegisterButton>
      </form>
    </LoginContainer>
  );
};
export default LoginBar;
