import React, { useState, useEffect } from "react";
import Header from "../compnents/Header";
import Footer from "../compnents/Footer";
import LucidCover from "../assests/lucid.jpg";
import JourneyCover from "../assests/journey.jpg";
import Stars from "../assests/stary_night.jpg";
import axios from "axios";
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
const AlbumContainer = styled.div`
  width: 100%;
  height: 87%;
`;

const Music = props => {
  return (
    <Background>
      <Header />
      <AlbumContainer>
        <img src={LucidCover} alt='Lucid album cover image' />
        <img
          src={JourneyCover}
          alt='Journey to the Adventure album cover image'
        />
      </AlbumContainer>
      <Footer />
    </Background>
  );
};

export default Music;
