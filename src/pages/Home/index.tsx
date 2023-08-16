import { ContainerButtonFilterStyle, MainStructure } from "./style";

// import infoListCards from "../../database/Mock";
import { mockList } from "../../database/Mock2";

import Pagination from "../../components/Pagination";
import ListCards from "../../components/ListCards";
import Button from "../../components/Button";
import FilterCars from "../../components/Filter";

import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { BannerImage } from "../../components/Banner";


const Home = () => {
  return (
    <>
      <NavBar />
      <BannerImage />
      <MainStructure>
        <FilterCars />
        <ListCards listCard={mockList} />
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
