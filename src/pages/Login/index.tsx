import LoginBar from "../../components/Login";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Container } from "./style";

const Login = () => {
  return (
    <>
    <Container>

      <NavBar />

      <LoginBar />
      <Footer />
    </Container>
      
    </>
  );
};

export default Login;
