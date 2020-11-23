import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Stars from "../assests/stary_night.jpg";
import JTA from "../assests/journey.jpg";
import axios from "axios";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  /* height: 100vh; */

  background-image: url(${Stars});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  overflow-x: hidden;
`;
const Shadow = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(
    0deg,
    rgba(66, 32, 3, 0.57) 0%,
    rgba(16, 14, 13, 0.74) 100%
  );
  backdrop-filter: blur(3px);
`;
const LyricsCase = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgb(21, 21, 21, 0.3);
`;

const WrittenLyrics = styled.div`
  width: 47.6%;
  height: 100%;
  margin-left: 2.4%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    margin: 0 0 0 0;

    color: rgba(230, 223, 213);
  }
  p {
    margin: 0 0 0 0;
    color: rgba(230, 223, 213);
  }
`;

const AlbumSongs = styled.div`
  width: 18.3%;
  height: 600px;
  margin-right: 2.4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(140, 126, 118, 0.29);
  border-radius: 10px;

  img {
    width: 184px;
    height: 184px;
    border-radius: 33px;
    margin-top: 20px;
  }
`;

const AlbumTitle = styled.div`
  width: 192px;
  height: 18px;
  display: flex;
  margin-top: 5.5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  h1 {
    font-size: 16px;
    font-family: "sawarabi";
    color: rgba(230, 223, 213);
    margin: 0;
  }
`;
const SongTitleList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 224px);

  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-left: 1px solid rgb(140, 126, 118, 0.3);
  border-right: 1px solid rgb(140, 126, 118, 0.3);
  border-top: 1px solid rgb(140, 126, 118, 0.3);
  margin-top: 20px;
  a {
    text-decoration: none;
    color: rgba(230, 223, 213);
    &:hover {
      cursor: pointer;
    }
  }
  /* h1 {
      font-size: 13px;
      font-family: sawarabi;
      color: rgba(230, 223, 213);
      margin: 0;
    } */
`;
const TrackNumberDisplay = styled.div`
  margin-left: 8px;
`;
const TrackNameDisplay = styled.div`
  margin-left: 8px;
`;

const SongDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid rgb(140, 126, 118);
`;
const Lyrics = props => {
  const [originalName, setOriginalName] = useState(
    useParams().song.replace(/-/g, " ")
  );
  const [coverName, setCoverName] = useState(
    useParams().album.replace(/-/g, " ")
  );
  const [musicLyrics, setMusicLyrics] = useState([]);

  useEffect(() => {
    writenLyrics();
  }, []);

  const writenLyrics = async () => {
    const res = await axios.get("/lyrics");
    const { data } = await res;

    setMusicLyrics(
      data.filter(albumnName => {
        return albumnName.collectionName === coverName;
      })
    );
  };
  console.log(musicLyrics);

  return (
    <Background>
      <Header />
      <Shadow>
        <LyricsCase>
          {musicLyrics
            .filter(oneTitle => {
              return oneTitle.trackName === originalName;
            })
            .map(result => {
              return (
                <WrittenLyrics>
                  <h1>{result.trackName}</h1>
                  <p>{result.lyrics}</p>{" "}
                </WrittenLyrics>
              );
            })}

          <AlbumSongs>
            <img src={JTA} alt='album art' />
            <AlbumTitle>
              <h1>{coverName}</h1>
            </AlbumTitle>

            <SongTitleList>
              {musicLyrics.map(sing => {
                return (
                  <SongDisplay key={sing.trackNumber}>
                    <TrackNumberDisplay>
                      <Link>{sing.trackNumber}</Link>
                    </TrackNumberDisplay>
                    <TrackNameDisplay>
                      {" "}
                      <Link>{sing.trackName}</Link>
                    </TrackNameDisplay>
                  </SongDisplay>
                );
              })}
            </SongTitleList>
          </AlbumSongs>
        </LyricsCase>
      </Shadow>
      <Footer />
    </Background>
  );
};

export default Lyrics;
