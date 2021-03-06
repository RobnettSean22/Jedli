import React from "react";
import Apple from "../assests/apple_cream.png";
import Facebook from "../assests/facebook_cream.png";
import Spotify from "../assests/spotify_cream.png";
import Instagram from "../assests/instagram_cream.png";
// import Twitter from "../assests/twitter.png";
import styled from "styled-components";

const NavigationFoot = styled.footer`
  width: 100%;
  height: 4.5%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  background: rgba(21, 23, 38, 0.8);
  ul {
    margin-bottom: 4px;
    padding-left: 3px;
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

const Links = styled.a`
  text-decoration: none;
`;

const Footer = props => {
  return (
    <NavigationFoot>
      <ul>
        <li>
          <Links
            href='https://www.facebook.com/jstjed/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Facebook} alt='Apple Icon' />
          </Links>
        </li>
        <li>
          <Links
            href='https://www.instagram.com/jstjed/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Instagram} alt='Instagram Icon' />
          </Links>
        </li>
        <li>
          <Links
            href='https://music.apple.com/us/artist/jedli/1492578733'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Apple} alt='Apple Icon' />
          </Links>
        </li>
        <li>
          <Links
            href='https://open.spotify.com/artist/2JmnGPSpsvhcKoQsgpzZ3Q'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Spotify} alt='Spotify Icon' />
          </Links>
        </li>
      </ul>
    </NavigationFoot>
  );
};

export default Footer;
