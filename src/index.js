import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Theme from "theme/basic";
import Fonts from "theme/fonts.js";
import GlobalStyled from "theme/GlobalStyled";
import App from "App";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Fonts />
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
