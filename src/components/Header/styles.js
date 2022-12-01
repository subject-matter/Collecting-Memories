import styled from "styled-components";
import { ReactComponent as AllSorts } from "./AllSorts.svg";

export const AS = styled(AllSorts)`
  width: 172px;
  height: auto;

  &.opened {
    filter: invert(1);
  }

  @media (max-width: 800px) {
    width: 91px;
  }
`;

export const Header = styled.header`
  padding: 30px 90px;
  width: calc(100% - 180px);
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    top: 12px;

    padding: 12px;
    width: calc(100% - 12px);
  }
`;

export const Hamburger = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  transform: rotate(-15deg);
  margin-right: 10px;
  cursor: pointer;

  &::before {
    background-color: rgba(34, 34, 35, 1);
    content: "";
    width: 30px;
    height: 2px;
    display: block;
    position: absolute;
    left: 0;
    top: 10px;
    transform-origin: center;
  }

  &.opened::before {
    background-color: rgba(255, 255, 255, 1);
    top: 5px;
    transform: rotate(-45deg);
    transition: transform 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &.opened::after {
    background-color: rgba(255, 255, 255, 1);
    top: 5px;
    transform: rotate(45deg);
    transform-origin: center;
    transition: transform 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::after {
    background-color: rgba(34, 34, 35, 1);
    content: "";
    width: 30px;
    height: 2px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: center;
  }
`;

export const HeaderContainer = styled.div`
  z-index: 15;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const NavWrapper = styled.div`
  height: 100vh;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 0;
  display: none;

  &.opened {
    display: grid;
  }

  .main-nav__bar {
    z-index: 16;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const NavImage = styled.div`
  height: 100vh;
  background-color: #7d49e9;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  background-color: #141414;
  float: right;
  padding: 50px 30px 0px 30px;
  @media (max-width: 480px) {
    padding: 200px 12px 12px 12px;
  }
`;

export const NavLink = styled.a`
  font-size: 52px;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  transition: 200ms ease-in;
  z-index: 14;

  &:hover {
    color: #7d49e9;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;
