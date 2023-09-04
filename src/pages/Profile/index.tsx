import { useContext, useState } from "react";
import { BannerColor } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import ListCards from "../../components/ListCards";
import { NavBarAdvertiser } from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { MainStructure } from "./style";
import { CarContext } from "../../providers/CarContext";
import { ModalCreate } from "../../components/ModalCreate";
import { ModalEditAddress } from "../../components/Modal/ModalEditAddress";
import { ModalEditUser } from "../../components/Modal/ModalEditUser";
import { ModalEditAd } from "../../components/Modal/ModalEditAd";
const Profile = () => {
  const { openCreateModal, userData, EditAddress, setEditAddress, EditUserModal, setEditUserModal, editAdModal } = useContext(CarContext);
  const toggleModalEditAddress = () => setEditAddress(false)
  const [isOwner, setIsOwner] = useState(true)
  
  
  const toggleModal = () => setEditUserModal(!EditUserModal);

  return (
    <>
      {EditUserModal && <ModalEditUser toggleModal={toggleModal}/>}
      {editAdModal && <ModalEditAd />}
      {openCreateModal && <ModalCreate />}
      {EditAddress && <ModalEditAddress toggleModal={toggleModalEditAddress}/>}
      <NavBarAdvertiser />
      <BannerColor name={userData.name} account_type={userData.account_type} description={userData.description} isOwner={isOwner}/>
      <MainStructure>
        <ListCards carList={userData.ads ? userData.ads : {}} isOwner={isOwner}/>
      </MainStructure>
      <Pagination />
      <Footer />
    </>
  );
};

export default Profile;
