import styled from "styled-components";
import { Link } from "react-router-dom";

export const Tiles = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 30px;
  padding: 50px 90px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 30px 12px;
  }
`;

export const Tile = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 400ms ease-in-out;

  &:hover {
    opacity: 50%;
  }

  &:visited {
    display: none;
  }
`;
