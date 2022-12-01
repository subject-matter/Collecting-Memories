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
import dance from "../components/Tiles/16_Have-a-dance.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Have a dance</ActivityTitle>
    <ImageBox>
      <img
        src={dance}
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
      <a href={dance}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Dancing combines two things that are guaranteed to make us feel better –
      physical exercise and music! If you need a little pick-me-up, busting out
      some moves to a boppy song is sure to do the trick.
    </Description>
  </Activity>
);

export default ActivityComponent;
