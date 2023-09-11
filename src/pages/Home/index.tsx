import { ContainerButtonFilterStyle, MainStructure } from './style';
import Pagination from '../../components/Pagination';
import ListCards from '../../components/ListCards';
import Button from '../../components/Button';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { NavBar, NavBarAdvertiser } from '../../components/NavBar';
import FilterCars from '../../components/Filter';
import { useContext } from 'react';
import { CarContext } from '../../providers/CarContext';

const Home = () => {
  const { searchResult, cars } = useContext(CarContext);
  const token = localStorage.getItem('@TOKEN');

  return (
    <>
      {token ? <NavBarAdvertiser /> : <NavBar/>}
      <Banner />
      <MainStructure>
        <FilterCars />
        <ListCards carList={searchResult} />
      </MainStructure>
      <ContainerButtonFilterStyle>
        <Button name='Filtro' variant='primary' />
      </ContainerButtonFilterStyle>
      {searchResult.length > 9 || cars.length > 9 && <Pagination />}    
      <Footer />
    </>
  );
};

export default Home;
