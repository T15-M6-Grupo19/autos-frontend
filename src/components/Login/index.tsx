import { LoginContainer } from "./style";

const LoginBar = () => {
  return (<LoginContainer>
    <h2 className="textHeading5500">Login</h2>
    <label>Email</label>
    <input></input>
    <label>Senha</label>
    <input></input>
    <p>esqueci minha senha</p>
    <button>Entrar</button>
    <p>ainda não possúi conta?</p>
    <button>Cadastrar</button>
  </LoginContainer>)
};
export default LoginBar;
