import React, { useState, useEffect } from "react";
import HomeImg from "../assests/jedfront_cut.jpg";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${HomeImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ShadowCase = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(66, 32, 3, 0.57) 0%,
    rgba(156, 63, 6, 0.6) 100%
  );
`;

const Landing = props => {
  return (
    <Background>
      <ShadowCase></ShadowCase>
    </Background>
  );
};
export default Landing;
