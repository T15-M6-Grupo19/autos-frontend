import LogoWhite from '../../assets/MotorsWhite.svg';
import UpArrow from '../../assets/angle-up.svg';
import { ContainerFooter } from './styles';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ContainerFooter>
      <figure>
        <img src={LogoWhite} alt='Logo' />
      </figure>
      <p>&copy; 2022 - Todos os direitos reservados.</p>
      <a title='Back to the top' href='#' onClick={scrollToTop}>
        <img src={UpArrow} />
      </a>
    </ContainerFooter>
  );
};
