import {
  ContainerButtonFilterStyle,
  FilterWrapper,
  HomeMainWrapperStyle,
  HomeSubWrapper,
  SimulateComponentHeaderStyle,
} from "./style";

import infoListCards from "../../database/Mock";

import Pagination from "../../components/Pagination";
import ListCards from "../../components/ListCards";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import { FilterComponent } from "../../components/Filter";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext/filterContext";

const Home = () => {
  const { setFilter } = useContext(FilterContext);

  const handleResetClick = () => {
    setFilter({
      name: "",
      brand: "",
      color: "",
      year: "",
      fuel: "",
      price: "",
    });
  };
  return (
    <HomeMainWrapperStyle>
      <FilterWrapper>
        <FilterComponent />
        <ContainerButtonFilterStyle>
          <Button
            name="Limpar filtros"
            variant="primary"
            onClick={handleResetClick}
          />
        </ContainerButtonFilterStyle>
      </FilterWrapper>
      <HomeSubWrapper>
        <SimulateComponentHeaderStyle></SimulateComponentHeaderStyle>
        <Banner />
        <ListCards listCard={infoListCards} />
        <Pagination />
      </HomeSubWrapper>
    </HomeMainWrapperStyle>
  );
};

export default Home;
