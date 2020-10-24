import React from "react";
import styled from "styled-components";

const NavStation = styled.div`
  width: 100%;
  height: 4.5%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
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
      <ul>
        <h1 onClick={e => props.history.push("/music/")}>Music</h1>
        <h1>Videos</h1>
        <h1>Events</h1>
      </ul>
    </NavStation>
  );
};
export default Header;
