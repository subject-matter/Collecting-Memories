import React from "react";
import GlobalFonts from "../fonts/fonts";
import Terms from "../components/TermsConditions";
import { GlobalStyle } from "../styles";

const TermsPage = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFonts />

      <Terms />
    </div>
  );
};

export default TermsPage;
