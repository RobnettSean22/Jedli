import React from "react";
import { NavLink, Link } from "react-router-dom";
import WhiteLogo from "../assests/jedli_logo_white.png";
import OrangeLogo from "../assests/jedli_logo_orange.png";
import GreenLogo from "../assests/jedli_logo_green.png";
import styled from "styled-components";

const NavStation = styled.div`
  width: 100%;
  height: 4.8%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(153, 63, 6, 0.9) 100%;
  img {
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    a {
      display: inline;
      color: rgba(230, 223, 213);
      margin: 23.5px;
      font-family: "Grenze Gotisch", cursive;
      letter-spacing: 3px;
      font-size: 16px;
      text-decoration: none;
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
  return (
    <NavStation>
      <Link to='/'>
        <White src={WhiteLogo} alt='logo' />
        <Orange src={OrangeLogo} alt='logo' />
        <Green src={GreenLogo} alt='logo' />
      </Link>
      <ul>
        <NavLink exact to='/music'>
          Music
        </NavLink>
        <NavLink exact to='/videos'>
          Videos
        </NavLink>
        <NavLink exact to='/events'>
          Events
        </NavLink>
      </ul>
    </NavStation>
  );
};
export default Header;
