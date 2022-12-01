import styled from "styled-components";
import { ReactComponent as PosterImg } from "./Poster.svg";

export const PreFooter = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 66vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: unset;
  }
`;

export const Download = styled.div`
  background-color: #efe7f9;
  padding: 50px 90px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 30px 12px;
  }
`;

export const Poster = styled.div`
  background-color: #7d49e9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;

  @media (max-width: 800px) {
    padding: 30px;
  }

  img {
    height: 100%;
    width: auto;
    max-height: 66vh;

    @media (max-width: 800px) {
      width: 50%;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const PosterSvg = styled(PosterImg)`
  align-self: center;
`;
