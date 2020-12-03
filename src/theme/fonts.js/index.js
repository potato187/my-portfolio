import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  @font-face { 
    font-family: "Open Sans";
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
    src: url("/Fonts/open-sans-300.woff2") format("woff2"), url("/Fonts/open-sans-300.woff") format("woff")
  }

  @font-face { 
    font-family: "Open Sans";
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
    src: url("/Fonts/open-sans-regular.woff2") format("woff2"), url("/Fonts/open-sans-regular.woff") format("woff")
  }

  @font-face { 
    font-family: "Open Sans";
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
    src: url("/Fonts/open-sans-600.woff2") format("woff2"), url("/Fonts/open-sans-600.woff") format("woff")
  }
  
  @font-face { 
    font-family: "Open Sans";
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
    src: url("/Fonts/open-sans-700.woff2") format("woff2"), url("/Fonts/open-sans-700.woff") format("woff")
  }
`;

export default Fonts;
