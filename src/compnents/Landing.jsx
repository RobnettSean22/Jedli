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

const Landing = props => {
  return <Background></Background>;
};
export default Landing;
