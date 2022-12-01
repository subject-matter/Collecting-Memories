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
import visit from "../components/Tiles/14_Visit-a-river.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Visit a river, beach or hill</ActivityTitle>
    <ImageBox>
      {" "}
      <img
        src={visit}
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
      <a href={visit}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Spending time in te taiao/nature perks up our mood, improves our immune
      system, and melts the stress away. And when it comes to nature in
      Aotearoa, we are certainly spoilt for choice! Wherever you are, a
      beautiful river, beach, or hill is likely within reach, just waiting to be
      (re)discovered.
    </Description>
  </Activity>
);

export default ActivityComponent;
