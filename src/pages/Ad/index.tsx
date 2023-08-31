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
} from "./style";
import { carImg } from "../../database/Mock2";
import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../providers/CarContext";
import Button from '../../components/Button';


const Ad = () => {
  const [adData, setAdData] = useState({
    photos: [{ photo_url: carImg }],
    year: "1",
    user: { name: "..." },
    comments: [
      {
        id: "97d2d700-9b92-458b-9865-ddfdf6a6c040",
        comment_text: "novo comentário de Arthur",
        created_at: "2023-08-29T14:19:50.390Z",
        user: {
          name: "teste"
        }
      }
  ]
  });
  const [isLogged, setIsLogged] = useState(false);

  const { userData } = useContext(CarContext);


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
  const CalculateTimeDifference = (referenceDate) => {
    const now = new Date();
    const refDate = new Date(referenceDate)
    
    const diff = now - refDate

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if(days == 0){
      return "Hoje"
    }
    else {
      return `há ${days} dias`
    }
    
  }

  const handleBuyClick = () => {
    const url = `https://api.whatsapp.com/send?phone=55${userData.mobile}`;
    window.open(url, "_blank");
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
                    <CarInfoBalloon>{`${adData.year[0]}${adData.year[1]}${adData.year[2]}${adData.year[3]}`}</CarInfoBalloon>
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
            {adData.comments.map((comment) => (
              <Comment>
              <div>
                <span>SL</span> <p>{comment.user.name}</p>{" "}
                <time
                  title='29 de Agosto as 21:05'
                  dateTime='2023-08-29 21:05:30'
                >
                  {CalculateTimeDifference(comment.created_at.substring(0,10))}
                </time>
              </div>
              <p>
                {comment.comment_text}
              </p>
            </Comment>
            ))}
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
