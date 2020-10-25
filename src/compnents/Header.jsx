import React from "react";
import WhiteLogo from "../assests/jedli_logo_white.png";
import OrangeLogo from "../assests/jedli_logo_orange.png";
import GreenLogo from "../assests/jedli_logo_green.png";
import styled from "styled-components";

const NavStation = styled.div`
  width: 100%;
  height: 5.5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(
    190deg,
    rgba(18, 9, 2, 0.9) 0%,
    rgba(153, 63, 6, 0.9) 100%
  );
  img {
    width: 112px;
    height: 80px;
    position: absolute;
    top: -2.2%;
    left: 0;
  }
  ul {
    h1 {
      display: inline;
      color: #e6dfd5;
      margin: 23.5px;
      font-family: "Grenze Gotisch", cursive;
      letter-spacing: 3px;
      font-size: 24px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const Header = props => {
  return (
    <NavStation>
      <img src={WhiteLogo} alt='logo' />
      <img src={OrangeLogo} alt='logo' />
      <img src={GreenLogo} alt='logo' />
      <ul>
        <h1 onClick={e => props.history.push("/music/")}>Music</h1>
        <h1>Videos</h1>
        <h1>Events</h1>
      </ul>
    </NavStation>
  );
};
export default Header;
