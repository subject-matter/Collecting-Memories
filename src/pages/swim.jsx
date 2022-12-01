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
import swim from "../components/Tiles/01_Go-for-a-swim.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Go for a swim!</ActivityTitle>
    <ImageBox>
      <img
        src={swim}
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
      <a href={swim}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Swimming is a fantastic way to move our tinana/body and a proven tool to
      boost the mood. Grab your togs and head to your nearest swimming spot to
      refresh and reset the mind, body and soul.
    </Description>
  </Activity>
);

export default ActivityComponent;
