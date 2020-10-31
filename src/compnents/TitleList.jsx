import React from "react";
import styled from "styled-components";

const TitlesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 25px;
  }
  h1 {
    font-size: 25px;
    color: rgb(140, 126, 118);
    margin: 0;
    text-align: center;
    &:hover {
      color: #e6dfd5;
      cursor: pointer;
    }
  }
`;

const TitleList = ({ titles }) => {
  return (
    <TitlesContainer>
      <h2>{titles.trackNumber}</h2>
      <h1>{titles.trackCensoredName}</h1>
    </TitlesContainer>
  );
};

export default TitleList;
