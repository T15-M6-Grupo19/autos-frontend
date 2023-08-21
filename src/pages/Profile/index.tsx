import { useContext } from "react";
import { BannerColor } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import ListCards from "../../components/ListCards";
import { NavBarAdvertiser } from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { MainStructure } from "./style";
import { CarContext } from "../../providers/CarContext";
import { ModalCreate } from "../../components/ModalCreate";

const Profile = () => {
  const { openCreateModal, userData } = useContext(CarContext);

  return (
    <>
      {openCreateModal && <ModalCreate />}
      <NavBarAdvertiser />
      <BannerColor name={userData.name} account_type={userData.account_type} />
      <MainStructure>
        <ListCards carList={userData.ads ? userData.ads : {}} />
      </MainStructure>
      <Pagination />
      <Footer />
    </>
  );
};

export default Profile;
