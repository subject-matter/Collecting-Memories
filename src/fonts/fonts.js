import { createGlobalStyle } from "styled-components";

import RoobertWoff from "./Roobert-Medium.woff";
import RoobertWoff2 from "./Roobert-Medium.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Roobert';
        src: local('RoobertWoff2'), local('RoobertWoff'),
        url(${RoobertWoff2}) format('woff2'),
        url(${RoobertWoff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
`;
