import React from "react";
import styled from "styled-components";

const CardCase = styled.div`
  width: 100%;
  height: 100%;
`;

const Card = styled.span`
  position: relative;
  display: inline-block;

  img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    border-radius: 33px;
    box-shadow: 7px 5px 12px 0 rgba(0, 0, 0, 0.62);
  }
  &:before {
    content: "Hello";
    border-radius: 33px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(29, 29, 29, 0.81);
    opacity: 0;
    transition: 0.5s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;
const AlbumCard = ({ albumInfo }) => {
  return (
    <Card key={albumInfo.collectionId}>
      <img src={albumInfo.artworkUrl100} alt='album cover artwork' />
    </Card>
  );
};
export default AlbumCard;
