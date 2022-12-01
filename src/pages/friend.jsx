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
import friend from "../components/Tiles/13_Call-an-old-friend.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Call an old friend</ActivityTitle>
    <ImageBox>
      <img
        src={friend}
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
      <a href={friend}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Reach out to a friend you haven’t heard from in a while - you’ll boost not
      just your own wellbeing, but theirs, too. This could be someone special
      you have lost touch with, or someone you wish you caught up with more
      often. A simple ‘Kei te pēhea koe?’ or ‘How are you?’ will go a long way
      towards brightening their day.
    </Description>
  </Activity>
);

export default ActivityComponent;
