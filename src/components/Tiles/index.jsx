import React from "react";

import { P, Description } from "../../styles";
import { Tiles, Tile, Overlay } from "./styles";

import swim from "./01_Go-for-a-swim.jpg";
import kai from "./02_Share-kai.jpg";
import book from "./03_Read-a-book.jpg";
import hikoi from "./04_Go-for-a-hikoi.jpg";
import song from "./05_Learn-a-new-song.jpg";
import picnic from "./06_Have-a-picnic.jpg";
import birds from "./07_Spot-5-different-birds.jpg";
import sky from "./08_Watch-the-sky-change.jpg";
import arty from "./09_Get-arty.jpg";
import outdoors from "./10_Play-a-game-outdoors.jpg";
import adventure from "./11_Backyard-adventure.jpg";
import barefoot from "./12_Barefoot.jpg";
import friend from "./13_Call-an-old-friend.jpg";
import river from "./14_Visit-a-river.jpg";
import whanau from "./15_Connect-with-whanau.jpg";
import dance from "./16_Have-a-dance.jpg";
import scribble from "./Scribble_01.png";

const images = [
  { image: swim, path: "swim" },
  { image: kai, path: "kai" },
  { image: book, path: "book" },
  { image: hikoi, path: "hikoi" },
  { image: song, path: "song" },
  { image: picnic, path: "picnic" },
  { image: birds, path: "birds" },
  { image: sky, path: "sky" },
  { image: arty, path: "arty" },
  { image: outdoors, path: "outdoors" },
  { image: adventure, path: "adventure" },
  { image: barefoot, path: "barefoot" },
  { image: friend, path: "friend" },
  { image: river, path: "river" },
  { image: whanau, path: "whanau" },
  { image: dance, path: "dance" }
];

let openedTiles = localStorage.getItem("openedTiles");
if (openedTiles) {
  openedTiles = JSON.parse(openedTiles);
} else {
  openedTiles = [];
}

const openTile = (tile) => {
  if (!isTileOpened(tile)) {
    openedTiles.push(tile);
    localStorage.setItem("openedTiles", JSON.stringify(openedTiles));
  }
};

const isTileOpened = (tile) => {
  return openedTiles.indexOf(tile) !== -1;
};

const TilesComponent = () => (
  <Tiles>
    <Description>
      It’s often the simple, everyday things that can bring us the most joy and
      create lifelong memories. This summer, why not explore all sorts of ways
      to boost your wellbeing, connect with the people you love, and try
      something new? Click on any tile to discover the activity behind it, share
      it on social if you like, then give it a go! You can even download or
      order the printed poster and tick off the activities with whānau and
      friends as you go along.
    </Description>
    {images.map(({ image, path }, index) => (
      <Tile to={path} onClick={() => openTile(path)} key={`tile-${index}`}>
        <img
          alt=""
          src={image}
          style={{
            alignSelf: "center",
            height: "100%",
            width: "100%"
          }}
        />

        {!isTileOpened(path) && (
          <Overlay>
            <img
              src={scribble}
              alt=""
              style={{
                position: "relative",
                height: "100%",
                width: "100%"
              }}
            />
          </Overlay>
        )}
      </Tile>
    ))}
  </Tiles>
);

export default TilesComponent;
