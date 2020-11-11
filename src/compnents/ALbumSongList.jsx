import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleList from "./TitleList";
import Header from "./Header";
import Footer from "./Footer";
import Stars from "../assests/stary_night.jpg";
import styled, { keyframes } from "styled-components";

// const slide = keyframes`
//    from {
//     transform: translate(-1400px);
//   }

//   to {
//     transform: translate(0px);
//   }
// `;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(66, 32, 3, 0.57) 0%,
    rgba(16, 14, 13, 0.74) 100%
  );
  backdrop-filter: blur(3px);
`;

const AlbumTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: rgb(21, 21, 21, 0.5);
  border-top: 1px solid rgb(140, 126, 118);
  h1 {
    color: white;
    margin: 0;
    font-family: sawarabi;
  }
`;

const AlbumnInfoCapsule = styled.div`
  width: 100%;
  height: 51.6%;
  /* top: 90px;
  position: absolute; */
  display: flex;
  justify-content: space-between;
  background: rgb(21, 21, 21, 0.9);
  /* border-top: 1px solid rgb(140, 126, 118);
  border-bottom: 1px solid rgb(140, 126, 118); */
  border-top: 1px solid rgba(191, 78, 8);
  border-bottom: 1px solid rgba(191, 78, 8);
`;

const TitleListGrid = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(2, 363px);
  grid-template-rows: repeat(6, 15%);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-y: auto;
  margin-left: 13%;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const AlbumCoverCase = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;

  width: 32%;
  height: 100%;

  h1 {
    position: absolute;
    text-align: center;
    font-family: sawarabi;
    color: rgba(230, 223, 213);
    margin: 0 0% 2% 0%;
    top: 0;
  }
  img {
    position: absolute;
    left: 0;
    bottom: -20.5px;
    width: 428px;
    height: 428px;
    border-radius: 33px;
    /* border: 1px solid rgb(0, 103, 255); */
    box-shadow: 2px 1px 12px 0 rgba(0, 0, 0, 0.62);
  }
`;

const Albumsonglist = props => {
  const [jedliMusic, setJedliMusic] = useState([]);

  const deconAlbum = props.location.state;

  useEffect(() => {
    itunesMusic();
  }, []);

  const itunesMusic = async () => {
    const res = await axios.get(
      `https://itunes.apple.com/search?term=JedLi&country=JP`
    );
    const { data } = await res;
    console.log(res.data);
    const filterMusic = await data.results.filter(specArtist => {
      return (
        specArtist.artistId === 1492578733 &&
        specArtist.collectionId === deconAlbum.collectionId
      );
    });
    setJedliMusic(filterMusic);
  };
  console.log(jedliMusic);

  return (
    <Background>
      <Shadow>
        <Header />
        <AlbumnInfoCapsule>
          <TitleListGrid>
            {jedliMusic
              .sort((a, b) => a.trackNumber - b.trackNumber)
              .map(list => {
                return <TitleList titles={list} />;
              })}
          </TitleListGrid>
          <AlbumCoverCase>
            <h1>{deconAlbum.name}</h1>
            <img src={deconAlbum.img} alt='albumn cover art' />
          </AlbumCoverCase>
        </AlbumnInfoCapsule>
        <Footer />
      </Shadow>
    </Background>
  );
};
export default Albumsonglist;
