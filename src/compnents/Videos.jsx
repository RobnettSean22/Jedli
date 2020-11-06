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
    background: #42b078;
  }

  figure.effect-sarah img {
    width: 100%;
    height: 284px;
    width: -webkit-calc(100% + 20px);
    width: calc(100% + 20px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  figure.effect-sarah:hover img {
    opacity: 0.4;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figure.effect-sarah figcaption {
    text-align: left;
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

  figure.effect-sarah p {
    padding: 1em 0;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  figure.effect-sarah:hover p {
    opacity: 1;
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
          <h2>Sarah</h2>
          <div class='grid'>
            <figure class='effect-sarah'>
              <img src={Smoke} alt='img13' />
              <figcaption>
                <h2>
                  Free <span>Sarah</span>
                </h2>

                <a href='#'>View more</a>
              </figcaption>
            </figure>
          </div>
        </VidCase>
      </VideoGrid>
    </Background>
  );
};

export default Videos;
