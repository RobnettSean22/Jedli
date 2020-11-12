import React from "react";
import EventBack from "../assests/jedli_events.jpg";
import Header from "./Header";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0d1016;

  display: flex;
  flex-direction: column;
`;

const PicIllusion = styled.div`
  width: 100%;
  height: 80.6%;
  top: 90px;
  position: absolute;
  display: flex;
  background: rgb(21, 21, 21, 0.9);
  overflow: hidden;
  opacity: 0.95;

  img {
    width: 100%;
    height: 100%;
    box-shadow: inset 0px -18px 27px -7px rgba(29, 29, 29, 0.73);
  }
`;

const Events = props => {
  return (
    <Background>
      <Header />
      <PicIllusion>
        <img src={EventBack} alt='background illusion' />
      </PicIllusion>
    </Background>
  );
};
export default Events;
