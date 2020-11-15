import React from "react";
import { Link } from "react-router-dom";
import SubtleEnergy from "../assests/jedli_for_loop.mp4";
import HomeImg from "../assests/jedfront_cut.jpg";
import Arrow from "../assests/arrow-real-vect_white.png";
import WhiteLogo from "../assests/jedli_logo_white.png";
import OrangeLogo from "../assests/jedli_logo_orange.png";
import GreenLogo from "../assests/jedli_logo_green.png";
import Apple from "../assests/apple_cream.png";
import Facebook from "../assests/facebook_cream.png";
import Spotify from "../assests/spotify_cream.png";
import Instagram from "../assests/instagram_cream.png";

import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .viddiv {
    width: 100vw;
    height: 750px;
    z-index: 1;

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
const Story = styled.div`
  width: 100vw;
  height: 750px;
  z-index: 1;
  background-image: url(${HomeImg});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 70px;
  }
`;

const ShadowCase = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(66, 33, 3, 0.57) 0%,
    rgba(156, 66, 6, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
`;
const OverlayStory = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(66, 33, 3, 0.57) 0%,
    rgba(156, 66, 6, 0.6) 100%
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Head = styled.div`
  width: 100%;
  height: 4.5%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  a {
    color: #e6dfd5;
    display: inline;
    font-family: "Luckiest Guy", cursive;
    margin-top: 1em;
    font-size: 31px;
    text-decoration: none;
    text-shadow: 0px -3px 0px #fc511b;
    z-index: 1;
    &:hover {
      opacity: 1;
      cursor: pointer;
      border-bottom: 3px solid #f07d0a;
    }
  }
  .music-link {
    color: #56c22f;
    text-shadow: 0px -3px 0px #fc511b;
  }
`;

const LogoPlacement = styled.div`
  width: 100%;
  height: 91%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .tostory {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 81px;
    height: 54px;
    border-radius: 5px;
    opacity: 0.3;
    top: 460px;

    a {
      text-decoration: none;
      color: #e6dfd5;
      font-family: "Luckiest Guy", cursive;
      font-size: 25px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    &:hover {
      opacity: 1;
    }
  }
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
  justify-content: flex-start;
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
const ArtistInfo = styled.div`
  width: 700px;
  height: 696px;

  p {
    margin: 0;
    color: #e6dfd5;
    font-family: "Open Sans", sans-serif;
  }
`;

const Landing = props => {
  return (
    <Background>
      <div className='viddiv'>
        <video muted autoPlay loop poster={HomeImg}>
          <source src={SubtleEnergy} type='video/mp4' />
        </video>
        <ShadowCase>
          <Head>
            <Link className='music-link' to='/music/'>
              Music
            </Link>
            <Link to='/videos/'>Videos</Link>
            <Link to='/events/'>Events</Link>
          </Head>
          <LogoPlacement>
            <White src={WhiteLogo} alt='white logo' />
            <Orange src={OrangeLogo} alt='orange logo' />
            <Green src={GreenLogo} alt='green logo' />
            <div className='tostory'>
              <a href='#about'>About</a>
              <a href='#about'>
                {" "}
                <img src={Arrow} alt='down vector arrow' />
              </a>
            </div>
          </LogoPlacement>
          <Foot>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/jstjed/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={Facebook} alt='Apple Icon' />
                </a>
              </li>

              <li>
                <a
                  href='https://www.instagram.com/jstjed/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {" "}
                  <img src={Instagram} alt='Instagram Icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://music.apple.com/us/artist/jedli/1492578733'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={Apple} alt='Apple Icon' />
                </a>
              </li>
              <li>
                <a
                  href='https://open.spotify.com/artist/2JmnGPSpsvhcKoQsgpzZ3Q'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={Spotify} alt='Spotify Icon' />
                </a>
              </li>
            </ul>
          </Foot>
        </ShadowCase>
      </div>
      <Story>
        <OverlayStory id='about'>
          <ArtistInfo>
            <p>
              Philippine born music producer, songwriter, & performer started
              making music with People’s Future in Manila, Philippines around
              2006-2012 releasing 3 projects: “Headlines: Issue #1” “Kinabukasan
              EP” & “What the Dilis EP” & 2 underground beat tapes “Beats &
              Broccoli” (2010) & “The Window Seat” (2011).
              <br />
              <br />
              He dropped SoundCloud projects “Halo Halo Music” (2015) under the
              name of JSTJED in California & “Selp Entitled EP” (2017) a
              collaboration with Yung Bawal as DASWSUP. He produced “Baby Bawal”
              for Bawal Clan's first album “Paid in Bawal”(2018).
              <br />
              <br />
              JedLi released his first official solo EP in Japan called “Journey
              to the Adventure”(Dec 2019) with independent label, OJT Records,
              which features RJAY TY & Yung Bawal from Bawal Clan. Since then,
              he dropped a single produced by Philippine legend, Juss Rye,
              called “Subtle Energy” (April 2020) & his most recent single,
              “Lucid” (August 2020) produced by DASWSUP both of which will also
              have a music video soon.
            </p>
          </ArtistInfo>
        </OverlayStory>
      </Story>
    </Background>
  );
};
export default Landing;
