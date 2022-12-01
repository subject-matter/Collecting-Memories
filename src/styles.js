import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #f5f5f5;
    color: #000000;
    
    margin: 0;
    font-family: Roobert, sans-serif;
    font-size: 25px;
    line-height: 1.12;
 
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}
`;

export const H1 = styled.h1`
  font-size: 58px;
  line-height: 1;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  transition: 200ms;
  &:hover {
    color: rgba(125, 73, 233, 0.1);
    fill: rgba(125, 73, 233, 0.1);
  }
`;

export const P = styled.p`
  font-size: 25px;
  line-height: 1.125;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  padding: 30px 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    padding: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Description = styled.p`
  grid-column: 3 / span 2;
  margin: 0;

  @media (max-width: 800px) {
    grid-column: 1 / span 2;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 240px;
  border: 1px solid #000000;
  border-radius: 30px;

  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;

  background-color: transparent;
  margin-right: 26px;

  transition-duration: 200ms;

  cursor: pointer;
  &:hover {
    background-color: #141414;
    color: #ffffff;
  }

  @media (max-width: 800px) {
    margin-bottom: 12px;
    margin-right: 0;
  }
`;
