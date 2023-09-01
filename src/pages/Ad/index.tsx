import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
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
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../providers/CarContext';
import Button from '../../components/Button';

const Ad = () => {
  const [adData, setAdData] = useState({
    photos: [
      {
        photo_url:
          'https://img.freepik.com/psd-premium/carro-da-cidade-em-fundo-transparente-renderizacao-em-3d-ilustracao_494250-34780.jpg',
      },
    ],
    year: '1',
    user: { name: '...' },
  });

  const [isLogged, setIsLogged] = useState(false);

  const { userData } = useContext(CarContext);

  const [modal, setModal] = useState(false);

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

  const handleBuyClick = () => {
    const url = `https://api.whatsapp.com/send?phone=55${userData.mobile}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Container>
        <NavBar />
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
            <h2>Comentários</h2>
            <Comment>
              <div>
                <span>SL</span> <p>Sivanir Lorenzete</p>{' '}
                <time
                  title='29 de Agosto as 21:05'
                  dateTime='2023-08-29 21:05:30'
                >
                  há 1 dia
                </time>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                nostrum obcaecati commodi modi? Laudantium cumque, voluptates ad
                temporibus corrupti dolorem provident maiores veritatis
                cupiditate nobis odit voluptati
              </p>
            </Comment>

            <Comment>
              <div>
                <span>SL</span> <p>Sivanir Lorenzete</p>{' '}
                <time
                  title='29 de Agosto as 21:05'
                  dateTime='2023-08-29 21:05:30'
                >
                  há 1 dia
                </time>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                nostrum obcaecati commodi modi? Laudantium cumque, voluptates ad
                temporibus corrupti dolorem provident maiores veritatis
                cupiditate nobis odit voluptati
              </p>
            </Comment>

            <Comment>
              <div>
                <span>SL</span> <p>Sivanir Lorenzete</p>{' '}
                <time
                  title='29 de Agosto as 21:05'
                  dateTime='2023-08-29 21:05:30'
                >
                  há 1 dia
                </time>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                nostrum obcaecati commodi modi? Laudantium cumque, voluptates ad
                temporibus corrupti dolorem provident maiores veritatis
                cupiditate nobis odit voluptati
              </p>
            </Comment>
          </ul>
        </ContainerComments>
        <ContainerTextAreaComment>
          {' '}
          {/*ESSA É A TAG FORM */}
          <div className='text-area-header'>
            <span>SL</span>
            <p>Silva Leonel</p>
          </div>
          <div className='text-comment-area'>
            <textarea name='coment' placeholder='Escreva seu comentário ...' />
            <Button
              name='comentar'
              variant='comment'
              disabled={isLogged ? false : true}
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
    </>
  );
};

export default Ad;
