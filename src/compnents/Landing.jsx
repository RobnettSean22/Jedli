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
const LogoTopLeft = styled.div`
  width: 720px;
  height: 100%;
  & img {
    position: absolute;
    width: 420px;
    height: 356px;
  }
`;
const WhiteLogoStory = styled.img`
  bottom: -306px;
  left: 37px;
`;
const OrangeLogoStory = styled.img`
  bottom: -308px;
  left: 37px;
`;
const GreenLogoStory = styled.img`
  bottom: -306px;
  left: 38px;
`;
const ArtistInfo = styled.div`
  width: 700px;
  height: 100%;
  background: rgb(29, 23, 21, 0.5);

  overflow-x: auto;
  p {
    margin: 0;
    padding: 16px;
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
          <LogoTopLeft>
            <WhiteLogoStory src={WhiteLogo} alt='white logo' />
            <OrangeLogoStory src={OrangeLogo} alt='orange logo' />
            <GreenLogoStory src={GreenLogo} alt='green logo' />
          </LogoTopLeft>
          <ArtistInfo>
            <p>
              With sights aimed to deliver a message to those that are willing
              to listen, nothing is random, nothing is coincidence, everything
              is synchronistic and has significance for JedLi.
              <br />
              <br />
              The songwriter, rapper, and producer was born out of Subic bay,
              Olongapo City, in the Philippines and began his music career in
              the city of Manila with the rap group People’s Future. During that
              time the group released several projects including Headline Issue
              #1, Kinabukasan EP and What the Dilis EP. The group then went on
              to perform around the country and even became finalists on
              FILSCAP’s National Songwriting Contest, (the Filipino Society of
              Composers, Authors, and Publishers).
              <br />
              <br />
              JedLi then took to the battle rap scene joining the FlipTop Rap
              Battle League becoming one of the first English speaking emcees to
              compete in the battle conference. He made several appearances
              before hanging it up.
              <br />
              <br />
              “Oh, hahaha, you saw that? Yeah man, that was forever ago. I was
              in a different state of mind then. I appreciate everything and the
              experiences that I had there but while I was doing it, I realized
              that it just wasn’t my realm and didn’t mesh with who I was
              striving to be mentally and spiritually so I decided to go a
              different route.”
              <br />
              <br />
              Breaking away from Fliptop by no means slowed down the
              Filipino-American rapper. He went on to work and collaborate with
              Yung Bawal in San Diego, CA forming their production duo, DASWSUP,
              releasing a SoundCloud project “The Selp-Entitled EP”. He would
              then connect with their Philippine collective, Bawal Clan,
              producing “Baby Bawal” off BC’s first album “Paid in Bawal” which
              further strengthened his relationship with Bawal Clan.
              <br />
              <br />
              His love for music drove him, inspired him, and changed is mental.
              “It has broadened my mind to pay attention and learn about music,
              it’s many styles, and how they differentiate across nations. I
              wanted to know more. I wanted to become a student of the game and
              this lifestyle. Everything has got this rhythmic element to it.
              Whether its from people speaking or sounds in nature, I can hear
              it now. Because of music, I’m tuned in with the source, its
              sounds, and their wavelength.”
              <br />
              <br />
              Currently living in Japan, JedLi released his first solo EP
              “Journey to the Adventure” with OJT Records, and single “Lucid”
              along with a collaboration with Juss Rye of SVC “Subtle Energy”
              (music video directed by Sean Brown). He is an artist that one day
              wants to reside amongst the stars scattered throughout this
              conscious energy field. “You seen Avatar the Last Air Bender? You
              know when he goes into the Avatar state? It’s like that. The world
              tries to tell us what we can and can’t do but I don’t sense that
              negativity when I’m JedLi. I feel like I’m in my own avatar state
              ahaaa.”
              <br />
              <br />
              JedLi continues to move forward looking to perfect his craft so
              the people in this world can hear a sound that makes them feel
              good about themselves when they need a reminder every now and
              then. “First things first, I do this for me because it makes me
              feel good. It’s who I am but I also do it to project the vibes I’m
              feeling and hopefully it will uplift those who are tuned in if
              only for a moment. This is something I feel like I am meant to do,
              what I have to do.”
              <br />
              <br />
              ”It doesn’t matter what language a person speaks, music is
              something you feel and it has the ability to work its way into a
              person’s mind, body, and their soul.”
              <br />
              <br />
              He is in tune with the energy, frequency, and vibration, a
              self-proclaimed Metaphysicist,
              <br />
              <br />
              JedLi.
            </p>
          </ArtistInfo>
        </OverlayStory>
      </Story>
    </Background>
  );
};
export default Landing;
