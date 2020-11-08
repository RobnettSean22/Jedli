import React, { useState } from "react";
import { Link } from "react-router-dom";
import JTA from "../assests/journey.jpg";
import Lucid from "../assests/lucid.jpg";
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
const AlbumCard = props => {
  const [albumCovers, setAlbumCovers] = useState([
    { id: 1, albumnArt: JTA },
    { id: 2, albumnArt: Lucid }
  ]);

  return albumCovers.map(muse => {
    return (
      <Card key={muse.id}>
        <img src={muse.albumnArt} alt='album cover artwork' />
      </Card>
    );
  });
};
// const AlbumCard = ({ albumInfo }) => {
//   const pathTitle = albumInfo.collectionName.replace(/\s/g, "-");
//   return (
//     <Card key={albumInfo.collectionId}>
//       <Link
//         key={albumInfo.collectionId}
//         to={{
//           pathname: `/music/${pathTitle}`
//         }}
//       >
//         <img src={albumInfo.artworkUrl100} alt='album cover artwork' />
//       </Link>
//     </Card>
//   );
// };
export default AlbumCard;
