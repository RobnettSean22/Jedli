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

const TrackTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TrackNumContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    color: rgb(140, 126, 118);
  }
`;

const SongLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  width: 293 px;
  height: 100%;
  a {
    text-decoration: none;
    color: rgb(140, 126, 118);
    font-size: 23px;
    font-family: "Open Sans", sans-serif;
    color: rgb(140, 126, 118);
    margin: 0;
    &:hover {
      font-size: 24px;
      color: #e6dfd5;
      cursor: pointer;
    }
  }
`;

const TitleList = ({ titles }) => {
  //'-' are put in to give url cleaner readability s
  const urlPathAlbumn = titles.collectionName.replace(/\s/g, "-");
  const urlPathSong = titles.trackCensoredName.replace(/\s/g, "-");
  const getRepContents = titles.trackCensoredName.substring(25);
  //names reduce for alignment and utlization of spacing
  const shortName =
    titles.trackCensoredName.length > 25
      ? titles.trackCensoredName.replace(getRepContents, "...")
      : titles.trackCensoredName;
  return (
    <TitlesContainer>
      <TrackTitle>
        <TrackNumContainer>
          <h1>{titles.trackNumber}</h1>
        </TrackNumContainer>
        <SongLinkContainer>
          <Link
            to={{
              pathname: `/music/${urlPathAlbumn}/${urlPathSong}`,
              state: { music: titles },
            }}
          >
            {shortName}
          </Link>
        </SongLinkContainer>
      </TrackTitle>
    </TitlesContainer>
  );
};

export default TitleList;
