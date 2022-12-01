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
import outdoors from "../components/Tiles/10_Play-a-game-outdoors.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Play a game outdoors</ActivityTitle>
    <ImageBox>
      <img
        src={outdoors}
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
      <a href={outdoors}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      We know exercise is good for us, but when we mix it with a little bit of
      fun, the effects on our physical and mental wellbeing can be incredible!
      The options are endless – you could give frisbee a go, challenge a friend
      to a game of swing ball, play fetch with your furry friend, or anything
      that strikes your fancy.
    </Description>
  </Activity>
);

export default ActivityComponent;
