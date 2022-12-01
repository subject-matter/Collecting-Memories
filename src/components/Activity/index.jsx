import React from "react";
import { Description } from "../../styles";
import {
  Activity,
  ImageBox,
  ActivityTitle,
  ActivityButton,
  Back,
  BtnBox
} from "./styles";

const ActivityComponent = () => (
  <Activity>
    <Back to="../">Back</Back>
    <ActivityTitle>Go for a swim!</ActivityTitle>
    <ImageBox></ImageBox>
    <BtnBox>
      <ActivityButton>Share on Facebook</ActivityButton>
      <ActivityButton>Download for Instagram</ActivityButton>
    </BtnBox>
    <Description>
      Swimming is a fantastic way to move our tinana/body and a proven tool to
      boost the mood. Grab your togs and head to your nearest swimming spot to
      refresh and reset the mind, body and soul.
    </Description>
  </Activity>
);

export default ActivityComponent;
