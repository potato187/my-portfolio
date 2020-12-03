import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }
  body {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }

  input,a {
    font-size: inherit;
  }

  a {
    text-decoration: none;
    color: currentColor;
    cursor: pointer;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2, h3, h4,h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default GlobalStyled;
