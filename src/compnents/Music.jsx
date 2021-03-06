import React from "react";
import Header from "../compnents/Header";
import Footer from "../compnents/Footer";
import AlbumCard from "../compnents/AlbumCard";
import Stars from "../assests/stary_night.jpg";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${Stars});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Shadow = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(66, 32, 3, 0.57) 0%,
    rgba(16, 14, 13, 0.74) 100%
  );
  backdrop-filter: blur(3px);
`;
const AlbumContainer = styled.div`
  width: 100%;
  height: 87%;
  display: grid;
  grid-template-columns: repeat(2, 408px);
  grid-template-rows: 408px;
  gap: 0% 2.9%;
  justify-content: center;
  align-content: center;
`;

const Music = props => {
  return (
    <Background>
      <Header />
      <Shadow>
        <AlbumContainer>
          <AlbumCard />
        </AlbumContainer>
      </Shadow>
      <Footer />
    </Background>
  );
};

export default Music;
