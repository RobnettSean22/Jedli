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
  grid-template-rows: repeat(1, 284px);
`;

const Figs = styled.figure`
  img {
    width: 100%;
    height: 100%;

    &:hover {
      transform: scale(1.01);
      transition-duration: 1s;
      border-bottom: 1px solid white;
    }
  }
  figcaption {
    position: relative;
    background: blue;
    text-align: center;
    bottom: 148px;
    h2 {
      font-family: sawarabi;
      font-size: 31px;
      margin: 0;
    }
    h2::after {
      /* position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: #fff;
      content: "";
      transition: transform 0.35s;
      transform: translate3d(-100%, 0, 0);
    } */
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
      </VideoGrid>
    </Background>
  );
};

export default Videos;
