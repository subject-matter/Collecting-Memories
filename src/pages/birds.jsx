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
import birds from "../components/Tiles/07_Spot-5-different-birds.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Spot 5 different manu/birds</ActivityTitle>
    <ImageBox>
      {" "}
      <img
        src={birds}
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
      <a href={birds}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      From the mighty kererū to the friendly pīwakawaka, Aotearoa is home to
      over 200 species of native manu/birds – how lucky are we! Try to spot and
      recognise 5 different birds on your next hikoi. You might like to take
      photos or write down what you’ve observed, too.
    </Description>
  </Activity>
);

export default ActivityComponent;
