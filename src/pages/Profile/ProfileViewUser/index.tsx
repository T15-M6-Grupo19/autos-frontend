import React, { useContext, useEffect, useState } from 'react';
import { BannerColor } from '../../../components/Banner';
import { Footer } from '../../../components/Footer';
import ListCards from '../../../components/ListCards';
import { NavBarAdvertiser } from '../../../components/NavBar';
import Pagination from '../../../components/Pagination';
import { MainStructure, NotFoundContainer } from './styles';
import { useParams } from 'react-router-dom';
import { api } from '../../../services/api';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { ModalEditUser } from '../../../components/Modal/ModalEditUser';
import { ModalEditAd } from '../../../components/Modal/ModalEditAd';
import { ModalCreate } from '../../../components/ModalCreate';
import { ModalEditAddress } from '../../../components/Modal/ModalEditAddress';
import { CarContext } from '../../../providers/CarContext';

const ProfileViewUser = () => {
  const [userDataView, setUserDataView] = useState({
    name: 'name',
    account_type: 'anunciante',
    description: 'testando123',
  });
  const [carList, setCarList] = useState({});
  const [listError, setListError] = useState(false);
  const [user, setUser] = useState({
    name: 'load',
    account_type: 'load',
    description: 'load',
    id: 'load',
  });
  const [owner, setOwner] = useState('');
  const [isOwner, setIsOwner] = useState(false);
  const {
    openCreateModal,
    userData,
    EditAddress,
    setEditAddress,
    EditUserModal,
    setEditUserModal,
    editAdModal,
  } = useContext(CarContext);

  const params = useParams();

  const navigate = useNavigate();
  const toggleModalEditAddress = () => setEditAddress(false);
  const toggleModal = () => setEditUserModal(!EditUserModal);


  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/users/${params.userId}`);

        const userCars = await response.data.ads;
        setUser(response.data);

        const userData = await response.data;

        setCarList(userCars);

        setUserDataView(userData);
      } catch (error) {
        setListError(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('@TOKEN');

      if (token) {
        const { sub }: string = jwt_decode(token);

        const userResponse = await api.get('/users/' + sub);
        setOwner(sub);
        setUserDataView(await userResponse.data);
      } else {
        navigate('/login');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (owner == user.id) {
      setIsOwner(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [owner]);

  return !listError ? (
    <React.Fragment>
      {EditUserModal && <ModalEditUser toggleModal={toggleModal} />}
      {editAdModal && <ModalEditAd />}
      {openCreateModal && <ModalCreate />}
      {EditAddress && <ModalEditAddress toggleModal={toggleModalEditAddress} />}
      <NavBarAdvertiser />
      <BannerColor
        name={user.name}
        account_type={user.account_type}
        description={user.description}
        isOwner={isOwner}
      />
      <MainStructure>
        <ListCards carList={userData.ads ? userData.ads : {}}
          isOwner={isOwner} />
      </MainStructure>
      <Pagination />
      <Footer />
    </React.Fragment>
  ) : (
    <>
      <NavBarAdvertiser />
      <NotFoundContainer>
        <h2>Usuário não encontrado</h2>
      </NotFoundContainer>
    </>
  );
};

export default ProfileViewUser;
