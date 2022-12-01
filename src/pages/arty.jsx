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
import Arty from "../components/Tiles/09_Get-arty.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Get arty!</ActivityTitle>
    <ImageBox>
      <img
        src={Arty}
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

      <a href={Arty}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Whether it’s colouring, painting, dabbling in photography, or something
      else, making art helps us become more creative, lifts our wairua/spirit,
      and calms our nervous system. It doesn’t matter how talented you are –
      your wellbeing practice will be down to a fine art.
    </Description>
  </Activity>
);

export default ActivityComponent;
