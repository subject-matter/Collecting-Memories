import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #141414;
  height: 33vh;
  padding: 30px 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    padding: 30px 12px;
  }
`;

export const TCS = styled.a`
  font-size: 14px;
  color: #a3a3a3;
  align-self: flex-end;
  grid-column: 1;
  transition: color 200ms ease;
  text-decoration: none;
  &:hover {
    color: #7d49e9;
  }

  @media (max-width: 800px) {
    order: 3;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  grid-column: 1 / span 1;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const SVGHover = styled.svg`
  transition: 200ms;
  &:hover {
    fill: rgba(175, 215, 255, 0.4);
  }
`;

export const Social = styled.div`
  display: flex;
  align-self: end;
  flex-wrap: no-wrap;
  grid-column: 4;
`;

export const Icon = styled.div`
  margin-right: 10px;
`;

export const IconHover = styled.path`
  transition: fill 200ms ease-in;

  &:hover {
    fill: #7d49e9;
  }
`;
