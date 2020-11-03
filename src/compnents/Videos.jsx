import React from "react";
import Header from "../compnents/Header";
import Silo from "../assests/video-bacground.png";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Silo});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
`;

const Videos = props => {
  return (
    <Background>
      <Header />
    </Background>
  );
};

export default Videos;
