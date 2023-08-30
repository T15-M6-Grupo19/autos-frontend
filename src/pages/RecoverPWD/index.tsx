import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { RecoverContainer } from './styles';
import { Suspense } from 'react';

export const DefaulLayout = () => {
  return (
    <RecoverContainer>
      <NavBar />
      <Suspense fallback={<h1>Loading... </h1>}>
        <Outlet />
      </Suspense>
    </RecoverContainer>
  );
};
