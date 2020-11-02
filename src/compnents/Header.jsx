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
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    h1 {
      display: inline;
      color: rgba(230, 223, 213);
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
const White = styled.img`
  width: 112px;
  height: 80px;
  position: absolute;
  top: -2%;
  left: -1px;
`;
const Orange = styled.img`
  width: 112px;
  height: 80px;
  position: absolute;
  top: -1.9%;
  left: -1px;
`;
const Green = styled.img`
  width: 112px;
  height: 80px;
  position: absolute;
  top: -2%;
  left: 0;
`;
const Header = props => {
  const homePage = () => {
    props.history.push("/");
  };
  return (
    <NavStation>
      <White onclick={e => homePage()} src={WhiteLogo} alt='logo' />
      <Orange onclick={e => homePage()} src={OrangeLogo} alt='logo' />
      <Green onclick={e => homePage()} src={GreenLogo} alt='logo' />
      <ul>
        <h1>Music</h1>
        <h1>Videos</h1>
        <h1>Events</h1>
      </ul>
    </NavStation>
  );
};
export default Header;
