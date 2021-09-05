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
  height: auto;
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
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background: rgb(21, 21, 21, 0.3);
`;

const WrittenLyrics = styled.div`
  width: 47.6%;
  height: auto;
  margin-left: 2.4%;

  h1 {
    margin-top: 100px;
    margin-bottom: 60px;
    text-align: center;
    font-size: 50px;
    color: #56c22f;
    text-shadow: 0px 5px 3px #fc511b;
    /* color: rgba(230, 223, 213); */
    font-family: "Open Sans", sans-serif;
  }
  p {
    margin: 2px 0 0 0;
    padding-left: 170px;
    color: rgba(230, 223, 213);
    line-height: 1.5;
    white-space: pre-wrap;
    font-size: 16px;
    text-shadow: 0px 2px 3px rgba(150, 150, 150, 1);
    font-family: "Open Sans", sans-serif;
  }
`;

const AlbumSongs = styled.div`
  width: 25.3%;
  height: 1000px;
  margin-right: 2.4%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(140, 126, 118, 0.29);
  border-radius: 10px;
  background: rgb(23, 22, 21, 0.9);

  & img {
    width: 300px;
    height: 300px;
    border-radius: 33px;
    margin-top: 20px;
  }
`;

const AlbumTitle = styled.div`
  width: 320px;
  height: 18px;
  display: flex;
  margin-top: 15.5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  h1 {
    font-size: 23px;
    font-family: "sawarabi";
    color: rgba(230, 223, 213);
    margin: 0;
  }
`;
const SongTitleList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 324px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-left: 1px solid rgb(140, 126, 118, 0.3);
  border-right: 1px solid rgb(140, 126, 118, 0.3);
  border-top: 1px solid rgb(140, 126, 118, 0.3);
  margin-top: 20px;

  /* a {
    text-decoration: none;
    color: rgba(230, 223, 213);
    &:hover {
      cursor: pointer;
    }
  } */
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
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover h3 {
    cursor: pointer;
    color: orange;
  }
  h3 {
    font-size: 16px;
    color: rgba(230, 223, 213);
  }
`;

const Lyrics = (props) => {
  const [originalName, setOriginalName] = useState(
    // removes "-" from the url pathname for usage in the application
    useParams().song.replace(/-/g, " ")
  );
  const [coverName, setCoverName] = useState(
    useParams().album.replace(/-/g, " ")
  );

  const [musicLyrics, setMusicLyrics] = useState(null);
  // callback writtenLyrics function unpon component rendering
  useEffect(() => {
    writenLyrics();
  }, []);

  // call to to endpoint for lyric data
  const writenLyrics = async () => {
    const res = await axios.get("/lyrics");
    const { data } = await res;

    // fliter lyric data based on selected albumn name
    setMusicLyrics(
      data.filter((albumnName) => {
        return albumnName.collectionName === coverName;
      })
    );
  };
  console.log(musicLyrics);

  return (
    <Background>
      <Header />
      <Shadow>
        {musicLyrics ? (
          <LyricsCase>
            {musicLyrics
              // filter through album lyrics to renders lyrics of specific song that was selected
              .filter((oneTitle) => {
                return oneTitle.trackName === originalName;
              })
              .map((result) => {
                return (
                  // breaking spliting the text in to sections utilizing * markers placed within the text located in the data base for render
                  <WrittenLyrics>
                    <h1>{result.trackName}</h1>

                    {result.lyrics.split("*").map((items, i) => {
                      return <p key={i}>{items} </p>;
                    })}
                  </WrittenLyrics>
                );
              })}

            <AlbumSongs>
              <img src={JTA} alt='album art' />
              <AlbumTitle>
                <h1>{coverName}</h1>
              </AlbumTitle>

              <SongTitleList>
                {musicLyrics
                  // (*Note to Self*)sorting by track number again repetative will look into passing previous sort with props in ASL component
                  // have the ability to useParams to accomplish this to use at a later date
                  .sort((a, b) => a.trackNumber - b.trackNumber)
                  .map((sing) => {
                    const keepPathAlbum = sing.collectionName.replace(
                      /\s/g,
                      "-"
                    );
                    const changePathSong = sing.trackName.replace(/\s/g, "-");

                    return (
                      <SongDisplay key={sing.trackNumber}>
                        <Link
                          to={{
                            pathname: `/music/${keepPathAlbum}/${changePathSong}`,
                          }}
                        >
                          <TrackNumberDisplay>
                            <h3>{sing.trackNumber}</h3>
                          </TrackNumberDisplay>
                          <TrackNameDisplay>
                            {" "}
                            <h3>{sing.trackName}</h3>
                          </TrackNameDisplay>
                        </Link>
                      </SongDisplay>
                    );
                  })}
              </SongTitleList>
            </AlbumSongs>
          </LyricsCase>
        ) : (
          <div
            style={{
              width: "100vw",
              height: "100%",
              background: "yellow",
              align_self: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div></div>
          </div>
        )}
      </Shadow>
      <Footer />
    </Background>
  );
};

export default Lyrics;
