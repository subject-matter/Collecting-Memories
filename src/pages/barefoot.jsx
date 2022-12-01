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
import barefoot from "../components/Tiles/11_Backyard-adventure.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Spend time barefoot</ActivityTitle>
    <ImageBox>
      {" "}
      <img
        src={barefoot}
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
      <a href={barefoot}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Walking barefoot is wonderfully therapeutic, so ditch the jandals and feel
      the whenua beneath you. Besides, nothing says summer quite like the sand
      between your toes or soft grass under your feet.
    </Description>
  </Activity>
);

export default ActivityComponent;
