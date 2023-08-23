import { useEffect, useState } from "react";
import { BannerColor } from "../../../components/Banner";
import { Footer } from "../../../components/Footer";
import ListCards from "../../../components/ListCards";
import { NavBarAdvertiser } from "../../../components/NavBar";
import Pagination from "../../../components/Pagination";
import { MainStructure, NotFoundContainer } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const ProfileViewUser = () => {
  const [userData, setUserData] = useState({ name: "name", account_type: "anunciante" });
  const [carList, setCarList] = useState({});
  const [listError, setListError] = useState(false);

  const params = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/users/${params.userId}`);

        const userCars = await response.data.ads;

        const userData = await response.data;

        setCarList(userCars);

        setUserData(userData);
      } catch (error) {
        setListError(true);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        const { sub }: string = jwt_decode(token);

        const userResponse = await api.get("/users/" + sub);

        setUserData(await userResponse.data);
      } else {
        navigate("/login");
      }
    })();
  }, []);

  return !listError ? (
    <>
      <NavBarAdvertiser />
      <BannerColor name={userData.name} account_type={userData.account_type} />
      <MainStructure>
        <ListCards carList={carList} />
      </MainStructure>
      <Pagination />
      <Footer />
    </>
  ) : (
    <>
      <NavBarAdvertiser />
      <NotFoundContainer>
        <h2>Usuário não encontrado</h2>
      </NotFoundContainer>
    </>
  );
};

export default ProfileViewUser;
