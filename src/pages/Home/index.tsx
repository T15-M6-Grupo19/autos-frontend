import { ContainerButtonFilterStyle, MainStructure } from "./style";

import infoListCards from "../../database/Mock";

import Pagination from "../../components/Pagination";
import ListCards from "../../components/ListCards";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import FilterCars from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <MainStructure>
        <FilterCars minKm={0} maxKm={21} minPrice={0} maxPrice={100} />
        <ListCards listCard={infoListCards} />
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
