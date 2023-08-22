import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { RecoverContainer } from './styles';

export const DefaulLayout = () => {
  return (
    <RecoverContainer>
      <NavBar />
      <Outlet />
    </RecoverContainer>
  );
};
