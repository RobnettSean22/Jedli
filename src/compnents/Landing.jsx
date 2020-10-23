import React, { useState, useEffect } from "react";
import HomeImg from "../assests/jedfront.jpg";
import Styles from "styled-components";

const Background = Styles.div`
width:100vw;
height:100vh;
img{
    width:1366px;
    height:768px;
}

`;

const Landing = props => {
  return (
    <Background>
      <img src={HomeImg} alt='Image of Jedli' />
    </Background>
  );
};
export default Landing;
