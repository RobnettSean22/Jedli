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
const Shadow = styled.div`
width: 100%;
    height: 100%;
    background: linear-gradient( 0deg, rgba(66,32,3,0.57) 0%, rgba(16,14,13,0.74) 100% );
}
`;
const AlbumContainer = styled.div`
  width: 100%;
  height: 87%;
  display: grid;
  grid-template-columns: 29.9% 29.9%;
  grid-template-rows: 53.4%;
  gap: 0% 2.9%;
  justify-content: center;
  align-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 33px;
    box-shadow: 7px 5px 12px 0 rgba(0, 0, 0, 0.62);
  }
`;
const Overlay = styled.span`
  position: relative;
  display: inline-block;

  img {
    vertical-align: middle;
  }
  &:before {
    content: "";
    border-radius: 33px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(29, 29, 29, 0.82);
    opacity: 0;
    transition: 0.5s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;

const Music = props => {
  return (
    <Background>
      <Shadow>
        <Header />
        <AlbumContainer>
          <Overlay>
            <img src={LucidCover} alt='Lucid album ' />
          </Overlay>
          <Overlay>
            <img src={JourneyCover} alt='Journey to the Adventure album ' />
          </Overlay>
        </AlbumContainer>
        <Footer />
      </Shadow>
    </Background>
  );
};

export default Music;
