import React from "react";
import { NavLink, Link } from "react-router-dom";
import WhiteLogo from "../assests/jedli_logo_white.png";
import OrangeLogo from "../assests/jedli_logo_orange.png";
import GreenLogo from "../assests/jedli_logo_green.png";
import styled from "styled-components";

const NavStation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 5.9%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(240, 125, 10) 100%;

  &:hover {
  }
  img {
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    .inactive {
      display: inline;
      color: rgba(230, 223, 213);
      margin: 23.5px;
      font-family: "Luckiest Guy", cursive;

      font-size: 16px;
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      color: green;
    }
  }
`;
const White = styled.img`
  width: 112px;
  height: 70px;
  position: absolute;
  top: -10px;
  left: -1px;
`;
const Orange = styled.img`
  width: 112px;
  height: 70px;
  position: absolute;
  top: -9px;
  left: -1px;
`;
const Green = styled.img`
  width: 112px;
  height: 70px;
  position: absolute;
  top: -10px;
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
        <NavLink
          className='inactive'
          activeClassName='acitve'
          exact
          to='/music'
        >
          Music
        </NavLink>
        <NavLink
          className='inactive'
          activeClassName='acitve'
          exact
          to='/videos'
        >
          Videos
        </NavLink>
        <NavLink
          className='inactive'
          activeClassName='acitve'
          exact
          to='/events'
        >
          Events
        </NavLink>
      </ul>
    </NavStation>
  );
};
export default Header;
