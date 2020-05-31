import { createGlobalStyle } from "./node_modules/styled-components";
import reset from "./node_modules/styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*{
  box-sizing : border-box;
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body {
  background-color : #ffffff;
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

a {
    color:inherit;
    text-decoration:none;
    cursor: pointer;
}
input, button {
    background-color: transparent;
    border: none;
    outline: none;
}
ol, ul, li {
    list-style:none;
}
img {
    display: block;
    width: 100%;
    height: 100%;
}


`;
export default GlobalStyle;
