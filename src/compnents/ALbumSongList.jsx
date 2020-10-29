import React, { useState } from "react";

import styled from "styled-components";

const Albumsonglist = props => {
  const [thumbnail, setThumbnail] = useState(
    props.location.state.singleAlbumArt
  );
  const [musicData, setMusicData] = useState(
    props.location.state.allJedliMusic
  );
  console.log(props.location.state.allJedliMusic);
  return <>Hello World</>;
};
export default Albumsonglist;
