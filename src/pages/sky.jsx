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
import sky from "../components/Tiles/08_Watch-the-sky-change.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Watch the sky change</ActivityTitle>
    <ImageBox>
      <img
        src={sky}
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
      <a href={sky}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      One of the best ways to nourish our wairua/soul is to slow down and take
      notice of the beauty around us. Sometimes, just taking a few minutes out
      of a busy day to look at the sky or admire the sunset can completely
      transform how we feel.
    </Description>
  </Activity>
);

export default ActivityComponent;
