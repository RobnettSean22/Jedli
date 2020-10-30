import React from "react";
import styled from "styled-components";

const TitlesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleList = ({ titles }) => {
  return (
    <TitlesContainer>
      {titles.trackNumber}
      {titles.trackCensoredName}
    </TitlesContainer>
  );
};

export default TitleList;
