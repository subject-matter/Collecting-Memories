import styled from "styled-components";
// import { ReactComponent as Illo } from "./Hero.svg";

export const HeroImgContainer = styled.div`
  height: 70vh;
  float: right;
  grid-column: 3 / span 2;
  display: flex;
  align-items: flex-end;

  @media (max-width: 800px) {
    grid-column: 1 / span 2;
    float: unset;
    height: 350px;
    margin-top: 60px;
  }
`;

export const HeroImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const HeroSection = styled.section`
  background-color: rgba(125, 73, 233, 0.1);
  /* width: 100vw; */
  overflow: hidden;
`;

export const Headline = styled.h1`
  font-size: 58px;
  line-height: 1.125;
  font-weight: 500;
  margin: 0;
  align-self: end;
  grid-column: span 2;

  @media (max-width: 800px) {
    font-size: 1em;
    order: 2;
  }
`;
