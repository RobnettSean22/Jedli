import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TitlesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TrackNum = styled.div`
  height: 100%;
  width: 10%;
  h2 {
    font-size: 20px;
    color: rgb(140, 126, 118);
  }
`;

const TrackTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    font-family: sawarabi;
    color: rgb(140, 126, 118);
    margin: 0;
    a {
      text-decoration: none;
      color: rgb(140, 126, 118);
      &:hover {
        font-size: 21px;
        color: #e6dfd5;
        cursor: pointer;
      }
    }
  }
`;

const TitleList = ({ titles }) => {
  const urlPathAlbumn = titles.collectionName.replace(/\s/g, "-");
  const urlPathSong = titles.trackCensoredName.replace(/\s/g, "-");
  const getRepContents = titles.trackCensoredName.substring(25);
  const shortName =
    titles.trackCensoredName.length > 25
      ? titles.trackCensoredName.replace(getRepContents, "...")
      : titles.trackCensoredName;
  return (
    <TitlesContainer>
      <TrackTitle>
        <h1>
          <Link
            to={{
              pathname: `/lyrics/${urlPathSong}`,
              state: { music: titles }
            }}
          >
            {shortName}
          </Link>
        </h1>
      </TrackTitle>
    </TitlesContainer>
  );
};

export default TitleList;
