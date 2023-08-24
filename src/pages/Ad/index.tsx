import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import { BlueBackground, CarImage, CarImageContainer, Container, ContainerAlign, SectionBackground} from "./style";
import { carImg } from "../../database/Mock2";
// import { useEffect, useState } from "react";

const Ad = () => {
  const params = useParams();
  return (
    <>
      <Container>
        <NavBar />
        
        <BlueBackground>
        <ContainerAlign>

          <CarImageContainer>
            <CarImage src={carImg}/>
          </CarImageContainer>
        </ContainerAlign>
        </BlueBackground>
        
        <Footer />
      </Container>
    </>
  );
};

export default Ad;
