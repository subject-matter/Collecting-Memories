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
import picnic from "../components/Tiles/06_Have-a-picnic.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Have a picnic</ActivityTitle>
    <ImageBox>
      {" "}
      <img
        src={picnic}
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
      <a href={picnic}>
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Spread out a blanket, breathe in the fresh air, soak up the sun, and enjoy
      some tasty kai! Whether it’s at the beach, in a local park or your own
      backyard, a summer picnic is sure to lift the mood.
    </Description>
  </Activity>
);

export default ActivityComponent;
