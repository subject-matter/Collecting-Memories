import React from "react";
import { HeroImgContainer, HeroImg, HeroSection, Headline } from "./styles";
import { Container } from "../../styles";
import SummerFlights from "./Summer-flights.png";

const HeroComponent = () => (
  <HeroSection>
    <Container>
      <Headline>
        There are all sorts of ways to boost your wellbeing this summer.
      </Headline>

      <HeroImgContainer>
        <HeroImg src={SummerFlights} />
      </HeroImgContainer>
    </Container>
  </HeroSection>
);

export default HeroComponent;
