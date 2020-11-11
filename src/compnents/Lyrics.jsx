import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Stars from "../assests/stary_night.jpg";
import JTA from "../assests/journey.jpg";
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(
    0deg,
    rgba(66, 32, 3, 0.57) 0%,
    rgba(16, 14, 13, 0.74) 100%
  );
`;
const LyricsCase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 76%;
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
  grid-template-rows: repeat(7, 43.5px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-left: 1px solid rgb(140, 126, 118, 0.3);
  border-right: 1px solid rgb(140, 126, 118, 0.3);
  border-top: 1px solid rgb(140, 126, 118, 0.3);
  margin-top: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgb(140, 126, 118);
    h1 {
      font-size: 13px;
      font-family: sawarabi;
      color: rgba(230, 223, 213);
      margin: 0;
    }
  }
`;
const Lyrics = props => {
  const [music, setMusic] = useState([
    { trackName: "Acend" },
    { trackName: "Neon City" },
    { trackName: "ABe Free (feat. Rjay Ty)" },
    { trackName: "I'ma Do My Thang, Daswsup..." },
    { trackName: "Heat Check" },
    { trackName: "Oh My God (Love for Me)" },
    { trackName: "Whatever We Want" }
  ]);
  return (
    <Background>
      <Shadow>
        <Header />
        <LyricsCase>
          <WrittenLyrics>
            <h1>Acend</h1>
            <p>
              [Intro: Eminem] Yeah So I guess this is what it is, huh? Think
              it's obvious We ain't never gonna see eye to eye But it's funny As
              much as I hate you I need you This is music to be murdered by
              [Chorus: Nikki Grier] Got a premonition I feel the end is near The
              beauty starts to fade The joy has turned to pain I hear the
              symphony playin' Ten thousand violins Souls floating away like
              feathers in the wind [Verse: Eminem] They said my last album I
              sounded bitter No, I sound like a spitter Who ninety percent of
              These hypocrites are tryna get rid of But why would I get a chip
              on my shoulder? I was considered, one time, as the illest Bitch,
              I'm still as fly as your zipper True, I just get richer But if it
              was ever all about skrilla Then I woulda quit a long motherfucking
              time ago Bitch, shut the fuck up I should go say that shit to Tech
              N9ne or to Jigga Nobody said shit about 2 Chainz as long as he's
              been here, shit No wonder you're mad, now I'm Looking at them
              plaques, count 'em (Yeah) I'm LL Cool J, Bigger and Deffer, that's
              how come (Uh) I sell like four mil' when I put out a bad album
              (What?) Revival flopped, came back and I scared the crap out 'em
              But Rolling Stone stars, I get two and a half outta Five, and I'll
              laugh out loud 'Cause that's what they gave BAD back in the day
              Which actually made me not feel as bad now, 'cause If it happened
              to James It can happen to Shady They do the same shit to Brady
              More people hate me than love me This game will make you go crazy
              'Bout to go for B-R-O-K-E I was the G, the O-A-T Once I was played
              in rotation At every radio station They said I'm lyrically amazing
              But I have nothing to say But then when I put out Revival and I
              had something to say They said that they hated the awake me I lose
              the rage, I'm too tame I get it back, they say I'm too angry I
              need to get me some Dre beats No, I should hook up with Tay Keith
              Fans keep on pulling me one way Haters pull me in another Got more
              hooks in me than Swae Lee 'Bout to pick up some weights and lift
              'til my tattoo of Hailie's face stretches They said I'm just a
              whiner, I sound like a baby I dish it out but can't take it But I
              take it, dish it back out And they get all bent out of shape This
              shit's almost comical Wait, and I meant no disrespect I wasn't
              dissin' Tech, that was not a shot at 2 Chainz or to Jay-Z They
              probably feel the same way because lately Instead of us being
              credited for longevity And being able to keep it up for this long
              at this level, we Get told we'll never be what we were Bitch, if I
              was as half as good as I was I'm still twice as good as you'll
              ever be Only way that you're ahead of me's alphabetically 'Cause
              if you diss me I'm coming after you like the letter V Killing
              everything, play this tune, it's your eulogy It's your funeral,
              prepare to die This is music for you to be murdered by
            </p>
          </WrittenLyrics>
          <AlbumSongs>
            <img src={JTA} alt='album art' />
            <AlbumTitle>
              <h1>Journey to the Adventure</h1>
            </AlbumTitle>

            <SongTitleList>
              {music.map(sing => {
                return (
                  <div>
                    <h1>{sing.trackName}</h1>
                  </div>
                );
              })}
            </SongTitleList>
          </AlbumSongs>
        </LyricsCase>
      </Shadow>
    </Background>
  );
};

export default Lyrics;
