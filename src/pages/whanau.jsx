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
import whanau from "../components/Tiles/15_Connect-with-whanau.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Connect with whanau</ActivityTitle>
    <ImageBox>
      <img
        src={whanau}
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
      <a href={whanau}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Humans are hard-wired for connection. It brings purpose and belonging to
      our lives and makes us feel happier and more secure. Whether it’s the
      whānau you were born into or the whānau you chose for yourself, take some
      time today to connect with the people you love and be fully present in
      their company.
    </Description>
  </Activity>
);

export default ActivityComponent;
