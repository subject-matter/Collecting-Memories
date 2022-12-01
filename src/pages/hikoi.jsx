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
import hikoi from "../components/Tiles/04_Go-for-a-hikoi.jpg";

const ActivityComponent = () => (
  <Activity>
    <Back to="/">Back</Back>
    <ActivityTitle>Go for a hikoi/wander</ActivityTitle>
    <ImageBox>
      <img
        src={hikoi}
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
      <a href={hikoi}>
        {" "}
        <ActivityButton>Download for Instagram</ActivityButton>
      </a>
    </BtnBox>
    <Description>
      Te taiao/nature is both free to enjoy and absolutely priceless for our
      health and wellbeing. This summer, embark on a hīkoi and explore a new
      part of your local area, either alone or in good company. Pay attention to
      the beautiful surroundings and revel in the sights, smells, and sounds.
    </Description>
  </Activity>
);

export default ActivityComponent;
