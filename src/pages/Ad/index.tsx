import { NavBar, NavBarAdvertiser } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  BlueBackground,
  BuyButton,
  CarBallonPriceAlign,
  CarImage,
  CarImageContainer,
  CarInfoBalloon,
  CarInfoBalloonAlign,
  CarInfoContainer,
  CarInfoText,
  CarPhoto,
  CarPhotosContainer,
  CarPhotosList,
  CarPhotosListItem,
  CarPhotosTitle,
  CarPrice,
  Comment,
  Container,
  ContainerAlign,
  ContainerComments,
  ContainerTextAreaComment,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  FooterAlign,
  PhotoAndUserAlign,
  UserInfoBalloon,
  UserInfoContainer,
  UserInfoDescription,
  UserInfoName,
  UserInfoShowAdsButton,
} from './style';
import { api } from '../../services/api';
import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../providers/CarContext';
import Button from '../../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { commentData } from './types';
import { schema } from './validator';
import { ModalEditUser } from '../../components/Modal/ModalEditUser';
import { ModalEditAddress } from '../../components/Modal/ModalEditAddress';

const Ad = () => {
  const { register, handleSubmit } = useForm<commentData>({
    resolver: zodResolver(schema),
  });

  const [adData, setAdData] = useState({
    photos: [
      {
        photo_url:
          'https://img.freepik.com/psd-premium/carro-da-cidade-em-fundo-transparente-renderizacao-em-3d-ilustracao_494250-34780.jpg',
      },
    ],
    year: '1',
    user: { name: '...' },
    comments: [
      {
        id: "97d2d700-9b92-458b-9865-ddfdf6a6c040",
        comment_text: "novo comentário de Arthur",
        created_at: "2023-08-29T14:19:50.390Z",
        user: {
          id: "5f717058-a380-4694-8932-28390578c28d",
          name: "teste"
        }
      }]
  });
  const [isLogged, setIsLogged] = useState(false);

  const { userData, refreshPage, EditAddress, setEditAddress, EditUserModal, setEditUserModal, getNameCharacters } = useContext(CarContext);

  const params = useParams();

  const token = localStorage.getItem('@TOKEN');
  useEffect(() => {
    if (token) {
      setIsLogged(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const navigate = useNavigate();

  const userPage = () => {
    navigate(`/profile/${adData.user.id}`);
  };

  useEffect(() => {
    async function adInfo() {
      try {
        const response = await api.get(`/salesAd/${params.adId}`);
        setAdData(response.data);
      } catch (error) {
        // toast.error(error.response.data.message);
      } finally {
        // console.log(error.)
      }
    }
    adInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const CreateComment = async (Data: commentData) => {
    api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token!)}`;
    try {
      await api.post(`/comment/${params.adId}`, Data);
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteComment = async (commentId: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token!)}`;
    try {
      await api.delete(`/comment/${commentId}`);
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const CalculateTimeDifference = (referenceDate: string) => {
    const now = new Date();
    const refDate = new Date(referenceDate);

    const diff = now - refDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days == 0) {
      return 'Hoje';
    } else if (days == 1) {
      return `há ${days} dia`;
    } else {
      return `há ${days} dias`;
    }
  };

  const handleBuyClick = () => {
    const url = `https://api.whatsapp.com/send?phone=55${userData.mobile}`;
    window.open(url, '_blank');
  };

  const toggleModal = () => setEditUserModal(!EditUserModal);
  const toggleModalEditAddress = () => setEditAddress(false)

  return (
    <React.Fragment>
    
    {EditUserModal && <ModalEditUser toggleModal={toggleModal}/>}
    {EditAddress && <ModalEditAddress toggleModal={toggleModalEditAddress}/>}
      <Container>
        {token ? <NavBarAdvertiser /> : <NavBar/>}
        <BlueBackground>
          <ContainerAlign>
            <div>
              <CarImageContainer>
                <CarImage src={adData.photos[0]?.photo_url} />
              </CarImageContainer>

              <CarInfoContainer>
                <CarInfoText className='textHeading6600'>{`${adData.model} ${adData.brand} ${adData.color}`}</CarInfoText>
                <CarBallonPriceAlign>
                  <CarInfoBalloonAlign>
                    <CarInfoBalloon>{`${adData.year[6]}${adData.year[7]}${adData.year[8]}${adData.year[9]}`}</CarInfoBalloon>
                    <CarInfoBalloon>{`${adData.kilometers} KM`}</CarInfoBalloon>
                  </CarInfoBalloonAlign>
                  <CarPrice className='textHeading7500'>{`${formatter.format(
                    adData.price
                  )}`}</CarPrice>
                </CarBallonPriceAlign>
                <BuyButton onClick={handleBuyClick}>Comprar</BuyButton>
              </CarInfoContainer>
              <DescriptionContainer>
                <DescriptionTitle className='textHeading6600'>
                  Descrição
                </DescriptionTitle>
                <Description className='textbody1400'>{`${adData.description}`}</Description>
              </DescriptionContainer>
            </div>

            <PhotoAndUserAlign>
              <CarPhotosContainer>
                <CarPhotosTitle className='textHeading6600'>
                  Fotos
                </CarPhotosTitle>
                <CarPhotosList>
                  {adData.photos.map((photo) => (
                    <CarPhotosListItem>
                      <CarPhoto src={photo.photo_url}></CarPhoto>
                    </CarPhotosListItem>
                  ))}
                </CarPhotosList>
              </CarPhotosContainer>
              <UserInfoContainer>
                <UserInfoBalloon>{adData.user.name[0]}</UserInfoBalloon>
                <UserInfoName className='textHeading6600'>
                  {adData.user.name}
                </UserInfoName>
                <UserInfoDescription className='textbody1400'>
                  {adData.user.description}
                </UserInfoDescription>
                <UserInfoShowAdsButton onClick={() => userPage()}>
                  Ver todos os anúncios
                </UserInfoShowAdsButton>
              </UserInfoContainer>
            </PhotoAndUserAlign>
          </ContainerAlign>
        </BlueBackground>
        <ContainerComments>
          {' '}
          {/* COMENTÁRIOS */}
          <ul>
            {adData.comments.length !== 0 ? (
              <h2>Comentários</h2>
            ) : (
              <h2>Sem Comentários</h2>
            )}
            {adData.comments.map((comment) => (
              <Comment  key={uuidv4()}>
              <div>
                <span>{getNameCharacters(comment.user.name)}</span> <p>{comment.user.name}</p>{" "}
                <time>
                  {CalculateTimeDifference(comment.created_at.substring(0,10))}
                </time>
              </div>
              <p>
                {comment.comment_text}
              </p>
              {(comment.user.id == userData.id || adData.user.id == userData.id) && (<button onClick={() => DeleteComment(comment.id)}>Excluir</button>)}
            </Comment>
            ))}
          </ul>
        </ContainerComments>
        <ContainerTextAreaComment onSubmit={handleSubmit(CreateComment)}>
          {' '}
          {/*ESSA É A TAG FORM */}
          <div className='text-area-header'>
            <span>{getNameCharacters(userData.name)}</span>
            <p>{userData.name}</p>
          </div>
          <div className='text-comment-area'>
            <textarea
              placeholder='Escreva seu comentário ...'
              {...register('comment_text')}
            />
            <Button
              name='comentar'
              variant='comment'
              disabled={isLogged ? false : true}
              type='submit'
            >
              Comentar
            </Button>
          </div>
          <div className='text-precoment-option'>
            <span>Gostei muito!</span>
            <span>Incrível</span>
            <span>Recomendarei para meus amigos!</span>
          </div>
        </ContainerTextAreaComment>{' '}
        {/*ADICIONAR COMENTÁRIOS */}
        <FooterAlign>
          <Footer />
        </FooterAlign>
      </Container>
    </React.Fragment>
  );
};

export default Ad;
