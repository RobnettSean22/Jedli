import React, { useState } from "react";
import { Link } from "react-router-dom";
import JTA from "../assests/journey.jpg";
import Lucid from "../assests/lucid.jpg";
import styled from "styled-components";

const Card = styled.span`
  position: relative;
  display: inline-block;
  figure {
    width: 100%;
    height: 100%;
    background: rgba(29, 29, 29);
    border-radius: 33px;
    box-shadow: 7px 5px 12px 0 rgba(0, 0, 0, 0.62);
    &:hover img {
      filter: blur(2px);
      opacity: 0.3;
      transition: opacity 10ms ease-in;
      cursor: pointer;
    }
    &:hover h2 {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
    img {
      position: absolute;
      vertical-align: middle;
      opacity: 1;
      width: 100%;
      height: 100%;
      border-radius: 33px;
    }
    figcaption {
      position: absolute;
      bottom: 0;

      h2 {
        font-size: 35px;
        opacity: 0;
        color: rgb(230, 223, 213);
        font-family: "sawarabi";
        margin-left: 20px;
      }
    }
  }
`;
const AlbumCard = (props) => {
  // State holds the album name and art work, and id (from itunes){needs to be add manual}
  const [albumCovers, setAlbumCovers] = useState([
    { id: 1492953358, albumnArt: JTA, albumName: "Journey To The Adventure" },
    { id: 1523221577, albumnArt: Lucid, albumName: "Lucid" },
  ]);
  //creation of each album card link and url extended path name
  return albumCovers.map((muse) => {
    // urlTitle personalizes url pathname for clearity and redability
    const urlTitle = muse.albumName.replace(/\s/g, "-");
    return (
      <Card key={muse.id}>
        <Link
          to={{
            pathname: `/music/${urlTitle}`,
            // The id, album name and art work are passed through the link to the music/albumTitle
            state: {
              //id passed for filter purposes in the itunesMusic funtion (located in AlbumSongList Component)
              collectionId: muse.id,
              name: muse.albumName,
              img: muse.albumnArt,
            },
          }}
        >
          <figure>
            <img src={muse.albumnArt} alt='album cover artwork' />
            <figcaption>
              <h2>{muse.albumName}</h2>
            </figcaption>
          </figure>
        </Link>
      </Card>
    );
  });
};

export default AlbumCard;
