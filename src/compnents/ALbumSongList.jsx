import React, { useState } from "react";
import TitleList from "./TitleList";
import Header from "./Header";
import Footer from "./Footer";
import Stars from "../assests/stary_night.jpg";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${Stars});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
`;
const Shadow = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background: linear-gradient( 0deg, rgba(66,32,3,0.57) 0%, rgba(16,14,13,0.74) 100% );
}
`;

const AlbumnInfoCapsule = styled.div`
  width: 100%;
  height: 62.6%;
  position: absolute;
  top: 90px;
  display: flex;
  justify-content: flex-end;
  background: rgb(21, 21, 21, 0.5);
  border-top: 1px solid rgb(140, 126, 118);
  border-bottom: 1px solid rgb(140, 126, 118);
`;

const TitleListGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-rows: repeat(6, 15%);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const AlbumCoverCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32.3%;
  height: 100%;
  img {
    width: 428px;
    height: 428px;
    border-radius: 33px;
    border: 1px solid rgb(140, 126, 118);
    box-shadow: 2px 1px 12px 0 rgba(0, 0, 0, 0.62);
  }
`;

const Albumsonglist = props => {
  const [thumbnail, setThumbnail] = useState(
    props.location.state.singleAlbumArt
  );
  const [musicData, setMusicData] = useState(
    props.location.state.allJedliMusic
  );

  const [singleAlbumTitles, setSingleAlbumTitles] = useState([]);
  const filtered = musicData.filter(items => {
    return items.collectionId === thumbnail.collectionId;
  });

  console.log(filtered);
  console.log(props.location.state.allJedliMusic);
  return (
    <Background>
      <Shadow>
        <Header />
        <AlbumnInfoCapsule>
          <TitleListGrid>
            {filtered
              .sort((a, b) => a.trackNumber - b.trackNumber)
              .map(list => {
                return <TitleList titles={list} />;
              })}
          </TitleListGrid>
          <AlbumCoverCase>
            <img src={thumbnail.artworkUrl100} alt='albumn cover art' />
          </AlbumCoverCase>
        </AlbumnInfoCapsule>
        <Footer />
      </Shadow>
    </Background>
  );
};
export default Albumsonglist;
