import React, { useState, useEffect } from "react";
import HomeImg from "../assests/jedfront_cut.jpg";
import WhiteLogo from "../assests/jedli_logo_white.png";
import OrangeLogo from "../assests/jedli_logo_orange.png";
import GreenLogo from "../assests/jedli_logo_green.png";
import Apple from "../assests/apple.png";
import Youtube from "../assests/youtube.png";
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
`;

const ShadowCase = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(66, 32, 3, 0.57) 0%,
    rgba(156, 63, 6, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  width: 100%;
  height: 8.5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ul {
    li {
      display: inline;
      color: #e6dfd5;
      margin: 5px;
    }
  }
`;

const LogoPlacement = styled.div`
  width: 100%;
  height: 83%;
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
  height: 8.5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    li {
      display: inline;
      margin: 5px;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

const Landing = props => {
  return (
    <Background>
      <ShadowCase>
        <Head>
          <ul>
            <li>Music</li>
            <li>Video</li>
            <li>Events</li>
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
    </Background>
  );
};
export default Landing;
