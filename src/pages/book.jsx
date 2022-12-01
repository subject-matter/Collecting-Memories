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
import books from "../components/Tiles/03_Read-a-book.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Read a book</ActivityTitle>
    <ImageBox>
      {" "}
      <img
        src={books}
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
      <a href={books}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Research has shown that reading fiction helps us develop empathy and
      critical thinking. Bonus: it can also be incredibly fun and make the hours
      fly by. Why not hit your local library and pick out a new page-turner, or
      dive into an old classic that’s been on your list for years?
    </Description>
  </Activity>
);

export default ActivityComponent;
