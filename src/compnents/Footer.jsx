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

const Footer = props => {
  return (
    <NavigationFoot>
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
    </NavigationFoot>
  );
};

export default Footer;
