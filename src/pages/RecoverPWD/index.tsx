import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { RecoverContainer } from './styles';

export const RecoverPage = () => {
  return (
    <RecoverContainer>
      <NavBar />
      <Outlet />
    </RecoverContainer>
  );
};
