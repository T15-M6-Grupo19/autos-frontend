import {
  ContainerAlign,
  EmailInput,
  EmailLabel,
  ErrorText,
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

  // async function loginForm(data) {

  // console.log(data)
  //   try {
  //     const response = await api.post("/login", data);

  //     window.localStorage.clear();
  //     window.localStorage.setItem(
  //       "@TOKEN",
  //       JSON.stringify(response.data.token)
  //     );
  //     window.localStorage.setItem(
  //       "@USERID",
  //       JSON.stringify(response.data.user.id)
  //     );
  //     //   console.log(response.data.token);
  //     // setUserData(response.data.user)
  //     console.log(response.data.user);

  //     // navigate("/");
  //     //   toast.success("Login efetuado!")
  //   } catch (error) {
  //     // toast.error(error.response.data.message);
  //     reset();
  //   } finally {
  //     // console.log(error.)
  //   }
  // }

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
            {...register("password")}
          ></PasswordInput>
          <ErrorText>{errors.password?.message}</ErrorText>
          <ForgetPasswordAlign>
            <ForgetPassword>Esqueci minha senha</ForgetPassword>
          </ForgetPasswordAlign>
          <LoginButton type="submit">Entrar</LoginButton>
          <TextAlign>
            <TextAccount className="body2400">
              Ainda não possui conta?
            </TextAccount>
          </TextAlign>
          <RegisterButton>Cadastrar</RegisterButton>
        </form>
      </LoginContainer>
    </ContainerAlign>
  );
};
export default LoginBar;
