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

const VidCase = styled.div`
  figure.effect-sarah {
  }

  figure.effect-sarah img {
    width: 100%;
    height: 284px;

    transition: opacity 0.35s, transform 0.35s;
  }

  figure.effect-sarah:hover img {
    opacity: 1;
    transform: scale(1.01);
  }

  figure.effect-sarah figcaption {
    text-align: center;
    position: relative;
    bottom: 180px;
  }

  figure.effect-sarah h2 {
    position: relative;
    overflow: hidden;
    padding: 0.5em 0;
  }

  figure.effect-sarah h2::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #fff;
    content: "";
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  figure.effect-sarah:hover h2::after {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const Videos = props => {
  return (
    <Background>
      <Header />
      <VideoGrid>
        <VidCase>
          <div class='grid'>
            <figure class='effect-sarah'>
              <img src={Smoke} alt='img13' />
              <figcaption>
                <h2>
                  Free <span>Sarah</span>
                </h2>
              </figcaption>
            </figure>
          </div>
        </VidCase>
      </VideoGrid>
    </Background>
  );
};

export default Videos;
