import { BannerColor } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import ListCards from "../../components/ListCards";
import { NavBarAdvertiser } from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { MainStructure } from "./style";

const Profile = () => {
     return (
          <>
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