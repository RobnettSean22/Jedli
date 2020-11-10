import React from "react";
import Header from "../compnents/Header";
import Silo from "../assests/video-bacground.png";
import Smoke from "../assests/smokecover-thumbnail.jpg";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Silo});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(2, 284px);
  position: relative;

  top: 45px;
  margin-top: 1px;
`;

const Figs = styled.figure`
  background: black;
  margin: 1px 0 0 0;
  overflow: hidden;
  &:hover img {
    opacity: 0.5;
    transform: scale(1.02);
    transition: opacity 500ms, transform 500ms ease-in-out;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    opacity: 0.85;
  }

  figcaption {
    position: relative;
    text-align: center;
    bottom: 148px;
    h2 {
      font-family: sawarabi;
      font-size: 46px;
      margin: 0;
      color: white;
    }
    h2::after {
      position: absolute;
      opacity: 0;
      bottom: -5px;
      left: 30%;
      width: 40%;
      height: 6px;
      background: rgb(10, 103, 196);
      content: "";

      transition: opacity 500ms ease-in-out;
    }
  }
  &:hover h2::after {
    opacity: 1;
    transform: translate3d(0%, 0, 0);
  }
`;

const Videos = props => {
  return (
    <Background>
      <Header />
      <VideoGrid>
        <Figs>
          <img src={Smoke} alt='img13' />
          <figcaption>
            <h2>Subtle Energy</h2>
          </figcaption>
        </Figs>
      </VideoGrid>
    </Background>
  );
};

export default Videos;
