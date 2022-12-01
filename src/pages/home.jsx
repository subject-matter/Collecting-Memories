import React from "react";
import GlobalFonts from "../fonts/fonts";
import Hero from "../components/Hero";
import Tiles from "../components/Tiles";

import { GlobalStyle } from "../styles";

const Homepage = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />

      <Hero />

      <Tiles />
    </div>
  );
};

export default Homepage;
