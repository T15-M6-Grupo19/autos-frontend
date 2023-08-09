import { ContainerButtonFilterStyle, SimulateComponentHeaderStyle } from "./style";

import infoListCards from "../../database/Mock";

import Pagination from "../../components/Pagination";
import ListCards from "../../components/ListCards";
import Button from "../../components/Button";
import Banner from "../../components/Banner";

const Home = () => {
     return (
         <>
          <SimulateComponentHeaderStyle></SimulateComponentHeaderStyle>
          <Banner/>
          <ListCards listCard={infoListCards}/>
          <ContainerButtonFilterStyle>
            <Button name='Filtro' variant="primary"/>
          </ContainerButtonFilterStyle>
          <Pagination />
         </>
     )
}

export default Home;