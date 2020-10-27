import React, { useState, useEffect } from "react";
import Header from "../compnents/Header";
import Footer from "../compnents/Footer";
import AlbumCard from "../compnents/AlbumCard";
import LucidCover from "../assests/lucid.jpg";
import JourneyCover from "../assests/journey.jpg";
import Stars from "../assests/stary_night.jpg";
import axios from "axios";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${Stars});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Shadow = styled.div`
width: 100%;
    height: 100%;
    background: linear-gradient( 0deg, rgba(66,32,3,0.57) 0%, rgba(16,14,13,0.74) 100% );
}
`;
const AlbumContainer = styled.div`
  width: 100%;
  height: 87%;
  display: grid;
  grid-template-columns: 29.9% 29.9%;
  grid-template-rows: 53.4%;
  gap: 0% 2.9%;
  justify-content: center;
  align-content: center;
`;

const Music = props => {
  const [jedliMusic, setJedliMusic] = useState([]);

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
      return specArtist.artistId === 1492578733;
    });
    setJedliMusic(filterMusic);
  };
  console.log(jedliMusic);

  return (
    <Background>
      <Shadow>
        <Header />
        <AlbumContainer>
          {jedliMusic
            .reduce((acc, current) => {
              const x = acc.find(
                item => item.collectionId === current.collectionId
              );
              if (!x) {
                return acc.concat([current]);
              } else {
                return acc;
              }
            }, [])
            .map(covers => {
              return <AlbumCard albumInfo={covers} />;
            })}
        </AlbumContainer>
        <Footer />
      </Shadow>
    </Background>
  );
};

export default Music;
