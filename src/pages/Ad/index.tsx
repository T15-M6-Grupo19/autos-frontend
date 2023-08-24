import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Container } from "./style";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

const Ad = () => {
  const params = useParams();
  return (
    <>
      <Container>
        <NavBar />

        <Footer />
      </Container>
    </>
  );
};

export default Ad;
