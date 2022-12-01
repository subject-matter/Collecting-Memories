import styled from "styled-components";
import { Link } from "react-router-dom";
import { H1, Button } from "../../styles";

export const Activity = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 0;
  padding: 50px 90px;

  @media (max-width: 800px) {
    padding: 30px 12px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;

export const ImageBox = styled.div`
  grid-column: 2 / span 2;
  background-color: rgba(125, 73, 233, 0.1);
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    grid-column: 1 / span 2;
  }
`;

export const ActivityTitle = styled(H1)`
  grid-column: 2 / span 2;
  text-align: center;
  margin-top: 90px;

  @media (max-width: 800px) {
    grid-column: 1 / span 2;
  }
`;

export const ActivityButton = styled(Button)`
  grid-column: 1 / span 2;
  height: 35px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

export const Back = styled(Link)`
  font-size: 16px;
  line-height: 1;
  color: #000;
  text-decoration: none;
  position: absolute;
  top: 150px;
  transition: color 200ms ease-in;
  z-index: 13;

  &:hover {
    color: #7d49e9;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    top: 75px;
  }
`;

export const BtnBox = styled.div`
  grid-column: 1;

  @media (max-width: 800px) {
    grid-column: 1 / span 2;
    text-align: center;
  }
`;
