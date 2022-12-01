import React from "react";
import { PreFooter, Download, Poster, BtnContainer } from "./styles";
import { P, Button } from "../../styles";
import PDFDownload from "../../Allsorts_Summer-Activity-Poster.pdf";

import PosterJpg from "./Allsorts_Summer-Activity-Poster.jpg";

const PreFooterComponent = () => (
  <PreFooter>
    <Download>
      <P>
        Download the poster, print it off at home or work, or order a set of
        pre-printed posters. Tick the activities off with whānau and friends as
        you go along!
      </P>
      <BtnContainer>
        <a href={PDFDownload} target="_blank" rel="noreferrer noopener">
          <Button>Download Poster</Button>
        </a>
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=O1tTr6C6WEWUfHOBL9740BY5Xe_4ATtJq5R0elvPzYhUREtKQTA5STNITjg3WFhPRE4xOUVaUzI2NiQlQCN0PWcu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button>Order Pre-Printed Poster</Button>
        </a>
      </BtnContainer>
    </Download>
    <Poster>
      <img
        src={PosterJpg}
        alt="Poster"
        style={{
          transform: "rotate(2deg)",
          maxHeight: "600px",
          filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))"
        }}
      />
    </Poster>
  </PreFooter>
);

export default PreFooterComponent;
