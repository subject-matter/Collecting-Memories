import React from "react";
import GlobalFonts from "../fonts/fonts";
import Activity from "../components/Activity";

import { GlobalStyle } from "../styles";

const ActivityPage = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />

      <Activity />
    </div>
  );
};

export default ActivityPage;
