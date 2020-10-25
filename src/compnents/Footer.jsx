import React from "react";
import Apple from "../assests/apple.png";
import Facebook from "../assests/facebook.png";
import Spotify from "../assests/spotify.png";
import Instagram from "../assests/instagram.png";
import Twitter from "../assests/twitter.png";
import styled from "styled-components";

const NavigationFoot = styled.div`
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

const Links = styled.a``;

const Footer = props => {
  return (
    <NavigationFoot>
      <ul>
        <li>
          <a>
            <img src={Facebook} alt='Apple Icon' />
          </a>
        </li>
        <li>
          <a>
            <img src={Twitter} alt='Twitter Icon' />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/jstjed/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={Instagram} alt='Instagram Icon' />
          </a>
        </li>
        <li>
          <a>
            <img src={Apple} alt='Apple Icon' />
          </a>
        </li>
        <li>
          <a>
            <img src={Spotify} alt='Spotify Icon' />
          </a>
        </li>
      </ul>
    </NavigationFoot>
  );
};

export default Footer;
