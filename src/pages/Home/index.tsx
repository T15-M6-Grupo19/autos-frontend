import { ContainerButtonFilterStyle, MainStructure } from "./style";
import Pagination from "../../components/Pagination";
import ListCards from "../../components/ListCards";
import Button from "../../components/Button";
import {Banner} from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import FilterCars from "../../components/Filter";
import { ModalCreate } from "../../components/ModalCreate";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <MainStructure>
        <FilterCars />
        <ListCards  />
        <ModalCreate />
      </MainStructure>
      <ContainerButtonFilterStyle>
        <Button name="Filtro" variant="primary" />
      </ContainerButtonFilterStyle>
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
