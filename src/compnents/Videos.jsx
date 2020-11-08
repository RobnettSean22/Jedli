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
  overflow-y: hidden;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(2, 284px);
  position: relative;
`;

const Figs = styled.figure`
  img {
    width: 100%;
    height: 100%;
    transform: scale(1);

    &:hover {
      transform: scale(1.01);
      transition: transform 500ms ease-in;
      border-bottom: 1px solid white;
    }
  }
  figcaption {
    position: relative;
    text-align: center;
    bottom: 148px;
    h2 {
      font-family: sawarabi;
      font-size: 31px;
      margin: 0;
      color: white;
    }
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
            <h2>
              Free <span>Sarah</span>
            </h2>
          </figcaption>
        </Figs>
        <Figs>
          <img src={Smoke} alt='img13' />
          <figcaption>
            <h2>
              Free <span>Sarah</span>
            </h2>
          </figcaption>
        </Figs>
      </VideoGrid>
    </Background>
  );
};

export default Videos;
