import React, { useState, useEffect } from "react";
import Header from "../compnents/Header";
import Stars from "../assests/stary_night.jpg";

import axios from "axios";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Stars});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Music = props => {
  return (
    <Background>
      <Header />
    </Background>
  );
};

export default Music;
