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

  .hover14 figure {
    position: relative;
  }
  .hover14 figure::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  .hover14 figure:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 0.75s;
  }
  @-webkit-keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
`;

const Videos = props => {
  return (
    <Background>
      <Header />
      <VideoGrid>
        <div class='hover14 column'>
          <div>
            <figure>
              <img src={Smoke} alt='video thumb' />
            </figure>
            <span>Hover</span>
          </div>
        </div>
      </VideoGrid>
    </Background>
  );
};

export default Videos;
