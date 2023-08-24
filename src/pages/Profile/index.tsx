import { useContext, useState } from "react";
import { BannerColor } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import ListCards from "../../components/ListCards";
import { NavBarAdvertiser } from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { MainStructure } from "./style";
import { CarContext } from "../../providers/CarContext";
import { ModalCreate } from "../../components/ModalCreate";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";

const Profile = () => {
  const { openCreateModal, userData } = useContext(CarContext);
  const [EditUserModal, setEditUserModal] = useState(false); 

  const toggleModal = () => setEditUserModal(!EditUserModal);

  return (
    <>
      {EditUserModal && <ModalEditUser toggleModal={toggleModal}/>}
      {openCreateModal && <ModalCreate />}
      <NavBarAdvertiser />
      <BannerColor name={userData.name} account_type={userData.account_type} description={userData.description}/>
      <MainStructure>
        <ListCards carList={userData.ads ? userData.ads : {}} />
      </MainStructure>
      <Pagination />
      <Footer />
    </>
  );
};

export default Profile;
