import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubtleEnergy from "../assests/jedli_homepage_video.mp4";
import HomeImg from "../assests/jedfront_cut.jpg";
import WhiteLogo from "../assests/jedli_logo_white.png";
import OrangeLogo from "../assests/jedli_logo_orange.png";
import GreenLogo from "../assests/jedli_logo_green.png";
import Apple from "../assests/apple.png";
import Facebook from "../assests/facebook.png";
import Spotify from "../assests/spotify.png";
import Instagram from "../assests/instagram.png";
import Twitter from "../assests/twitter.png";

import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${HomeImg});
  background-repeat: no-repeat;
  background-size: cover;
  div {
    width: 100%;
    height: 100%;

    video {
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
`;

const ShadowCase = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(66, 33, 3, 0.57) 0%,
    rgba(156, 66, 6, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  width: 100%;
  height: 4.5%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ul {
    a {
      display: inline;
      color: #e6dfd5;
      margin: 23.5px;
      font-family: "Grenze Gotisch", cursive;
      letter-spacing: 3px;
      font-size: 24px;
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const LogoPlacement = styled.div`
  width: 100%;
  height: 91%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Green = styled.img`
  position: absolute;
  width: 45.3%;
  height: 57.6%;
`;
const White = styled.img`
  position: absolute;
  width: 45.3%;
  height: 57.6%;
  top: 21%;
  left: 27.3%;
`;
const Orange = styled.img`
  position: absolute;
  width: 45.3%;
  height: 57.6%;
  top: 21.5%;
  left: 27.3%;
`;
const Foot = styled.div`
  width: 100%;
  height: 4.5%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ul {
    margin-bottom: 1%;
    li {
      display: inline;
      margin: 19px;
      img {
        width: 16px;
        height: 16px;
        &:hover {
          filter: hue-rotate(90deg);
          cursor: pointer;
        }
      }
    }
  }
`;

const Landing = props => {
  return (
    <Background>
      <div>
        <video muted autoPlay loop poster={HomeImg}>
          <source src={SubtleEnergy} type='video/mp4' />
        </video>
        <ShadowCase>
          <Head>
            <ul>
              <Link to='/music/'>Music</Link>
              <Link to='/videos/'>Videos</Link>
              <Link to='/events/'>Events</Link>
            </ul>
          </Head>
          <LogoPlacement>
            <White src={WhiteLogo} alt='white logo' />
            <Orange src={OrangeLogo} alt='orange logo' />
            <Green src={GreenLogo} alt='green logo' />
          </LogoPlacement>
          <Foot>
            <ul>
              <li>
                <img src={Facebook} alt='Apple Icon' />
              </li>
              <li>
                <img src={Twitter} alt='Twitter Icon' />
              </li>
              <li>
                <img src={Instagram} alt='Instagram Icon' />
              </li>
              <li>
                <img src={Apple} alt='Apple Icon' />
              </li>
              <li>
                <img src={Spotify} alt='Spotify Icon' />
              </li>
            </ul>
          </Foot>
        </ShadowCase>
      </div>
    </Background>
  );
};
export default Landing;
