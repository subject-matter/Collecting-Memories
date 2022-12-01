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
import adventure from "../components/Tiles/11_Backyard-adventure.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Go on a backyard aventure</ActivityTitle>
    <ImageBox>
      {" "}
      <img
        src={adventure}
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
      <a href={adventure}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      You don’t need to travel far to experience something new this summer.
      Pitching a tent in your backyard with tamariki for a little ‘wilderness
      adventure’ can be buckets of fun!
    </Description>
  </Activity>
);

export default ActivityComponent;
