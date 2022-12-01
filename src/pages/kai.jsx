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
import kai from "../components/Tiles/02_Share-kai.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Share kai</ActivityTitle>
    <ImageBox>
      <img
        src={kai}
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
      <a href={kai}>
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      We all instinctively know this, and now science backs it up, too: the
      simple act of eating kai with the people we love enhances wellbeing and
      relieves stress. No fancy restaurants required – a simple home cooked meal
      made with aroha and shared with whānau and mates is all you need.
    </Description>
  </Activity>
);

export default ActivityComponent;
