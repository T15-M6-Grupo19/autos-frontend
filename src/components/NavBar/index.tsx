import { useEffect, useState } from 'react';
import LogoColors from '../../assets/MotorsColors.svg';
import Bars from '../../assets/bars.svg';
import X from '../../assets/x.svg';
import { ContainerNav } from './styles';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ContainerNav>
      <figure>
        <img src={LogoColors} alt='Logo' />
      </figure>
      {windowWidth < 620 ? (
        <>
          {isOpen ? (
            <>
              <span onClick={() => toggleModal()}>
                <img title='opções' src={X} />
              </span>

              <div className='box-handle-mobile'>
                {' '}
                <button>Fazer Login</button>
                <button>Cadastrar</button>
              </div>
            </>
          ) : (
            <span onClick={() => toggleModal()}>
              <img title='opções' src={Bars} />
            </span>
          )}
        </>
      ) : (
        <>
          <span className='divider'>|</span>
          <div className='box-handle-desktop'>
            <button>Fazer Login</button>
            <button>Cadastrar</button>
          </div>
        </>
      )}
    </ContainerNav>
  );
};
