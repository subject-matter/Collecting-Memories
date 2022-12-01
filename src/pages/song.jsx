import React from "react";
import { Description } from "../styles";
import {
  Activity,
  ImageBox,
  ActivityTitle,
  ActivityButton,
  Back,
  BtnBox
} from "../components/Activity/styles";
import song from "../components/Tiles/05_Learn-a-new-song.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Learn a new waiata/song</ActivityTitle>
    <ImageBox>
      <img
        src={song}
        alt=""
        style={{
          alignSelf: "center",
          height: "100%",
          width: "100%"
        }}
      />
    </ImageBox>
    <BtnBox>
      <ActivityButton>Share on Facebook</ActivityButton>
      <a href={song}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Dust off your favourite instrument or crank up the tunes! By learning how
      to play or sing a new waiata, you’re giving your brain a good workout by
      improving your memory and learning skills. Have we mentioned music also
      does wonders for our mood and mental wellbeing?
    </Description>
  </Activity>
);

export default ActivityComponent;
