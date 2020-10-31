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

const TitleListGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 150px 150px 150px 150px 150px;
  gap: 0px 0px;
`;
const AlbumnInfoCapsule = styled.div`
  width: 100%;
  height: 62.6%;
  position: absolute;
  top: 90px;
  display: flex;
  justify-content: space-between;
  background: rgb(21, 21, 21, 0.6);
  border-top: 1px solid rgb(140, 126, 118);
  border-bottom: 1px solid rgb(140, 126, 118);
`;
const AlbumCoverCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32.3%;
  height: 100%;
  img {
    border: 1px solid #8c7e76;
    width: 428px;
    height: 428px;
    border-radius: 33px;
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
