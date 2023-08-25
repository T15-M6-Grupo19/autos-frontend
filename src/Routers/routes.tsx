import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ProfileViewUser from '../pages/Profile/ProfileViewUser';
import { DefaulLayout } from '../pages/RecoverPWD';
import { MainRecover } from '../pages/RecoverPWD/MainSendInfo';
import { MainRecoverPWD } from '../pages/RecoverPWD/MainReserPWD';
import Ad from '../pages/Ad';


export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/:userId' element={<ProfileViewUser />} />
      <Route path='/ad/:adId' element={<Ad />} />
      <Route path='/recover' element={<DefaulLayout />}>
        <Route path='/recover' element={<MainRecover />} />
        <Route path='/recover/resetpwd/:token' element={<MainRecoverPWD />} />
      </Route>
    </Routes>
  );
}
