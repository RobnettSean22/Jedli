import React from "react";
import styled from "styled-components";

const TitlesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
  }
`;

const TitleList = ({ titles }) => {
  return (
    <TitlesContainer>
      {titles.trackNumber}
      <h1>{titles.trackCensoredName}</h1>
    </TitlesContainer>
  );
};

export default TitleList;
