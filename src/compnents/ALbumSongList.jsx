import React, { useState } from "react";
import Header from "./Header";
import Stars from "../assests/stary_night.jpg";
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
const Albumsonglist = props => {
  const [thumbnail, setThumbnail] = useState(
    props.location.state.singleAlbumArt
  );
  const [musicData, setMusicData] = useState(
    props.location.state.allJedliMusic
  );

  const filtered = musicData.filter(items => {
    return items.collectionId === thumbnail.collectionId;
  });
  console.log(filtered);
  console.log(props.location.state.allJedliMusic);
  return (
    <Background>
      <Shadow>
        <Header />
      </Shadow>
    </Background>
  );
};
export default Albumsonglist;
