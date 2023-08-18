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

     const {openCreateModal} = useContext(CarContext)
     return (
          <>
               {
                    openCreateModal && <ModalCreate />
               }
               <NavBarAdvertiser />
               <BannerColor />
               <MainStructure>
                    <ListCards />
               </MainStructure>
               <Pagination />
               <Footer />
          </>
     );
   };
   
export default Profile;