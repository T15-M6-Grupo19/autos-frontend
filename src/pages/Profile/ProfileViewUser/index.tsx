import { useEffect, useState } from "react";
import { BannerColor } from "../../../components/Banner";
import { Footer } from "../../../components/Footer";
import ListCards from "../../../components/ListCards";
import { NavBarAdvertiser } from "../../../components/NavBar";
import Pagination from "../../../components/Pagination";
import { MainStructure, NotFoundContainer } from "./styles";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";

const ProfileViewUser = () => {
  const [userDataView, setUserDataView] = useState({ name: "name", account_type: "anunciante", description: "testando123" });
  const [carList, setCarList] = useState({});
  const [listError, setListError] = useState(false);

  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/users/${params.userId}`);

        const userCars = await response.data.ads;

        const userData = await response.data;

        setCarList(userCars);

        setUserDataView(userData);
      } catch (error) {
        setListError(true);
      }
    })();
  }, []);

  return !listError ? (
    <>
      <NavBarAdvertiser />
      <BannerColor name={userDataView.name} account_type={userDataView.account_type} description={userDataView.description}/>
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
