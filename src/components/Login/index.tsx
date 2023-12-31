import {
  ContainerAlign,
  EmailInput,
  EmailLabel,
  ErrorText,
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
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useContext } from "react";
import { CarContext } from "../../providers/CarContext";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../providers/UserContext/UserContext";

const LoginBar = () => {
  const { getUserById } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Informe um email")
      .email("Digite um formato de email válido"),
    password: yup.string().required("Informe sua senha"),
  });

  interface iLoginProps {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const registerPage = () => {
    navigate("/register")
  }

  const { setUserData } = useContext(CarContext);

  interface Login {
    email: string;
    password: string;
  }
  
  async function loginForm(data:Login) {
    try {
      const response = await api.post("/login", data);

      const { token } = await response.data;
  
      window.localStorage.setItem("@TOKEN", JSON.stringify(token));

      const { sub }: string = jwt_decode(token);

      const userResponse = await api.get('/users/' + sub);

      setUserData(userResponse.data);
      getUserById();
      navigate(`/profile/${sub}`);
    } catch (error) {
      console.log(error);
      reset();
    } finally {
      null;
    }
  }

  return (
    <ContainerAlign>
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
          <ErrorText>{errors.email?.message}</ErrorText>
          <PasswordLabel>Senha</PasswordLabel>
          <PasswordInput
            id="password"
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
          ></PasswordInput>
          <ErrorText>{errors.password?.message}</ErrorText>
          <ForgetPasswordAlign>
            <Link to="/recover">Esqueci minha senha</Link>
          </ForgetPasswordAlign>
          <LoginButton type="submit">Entrar</LoginButton>
          <TextAlign>
            <TextAccount className="body2400">
              Ainda não possui conta?
            </TextAccount>
          </TextAlign>
        </form>
          <RegisterButton onClick={ () => registerPage()}>Cadastrar</RegisterButton>
      </LoginContainer>
    </ContainerAlign>
  );
};
export default LoginBar;
