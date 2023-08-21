import { ContainerButtonFilterStyle, MainStructure } from "./style";
import Pagination from "../../components/Pagination";
import ListCards from "../../components/ListCards";
import Button from "../../components/Button";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import FilterCars from "../../components/Filter";
import { useContext } from "react";
import { CarContext } from "../../providers/CarContext";

const Home = () => {
  const { searchResult } = useContext(CarContext);

  return (
    <>
      <NavBar />
      <Banner />
      <MainStructure>
        <FilterCars />
        <ListCards carList={searchResult}/>
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
