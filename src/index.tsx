import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import appWrapperBg from "./img/bg.jpg";

const GlobalStyles = createGlobalStyle`
 html, body
  {
    background: #000 url(${appWrapperBg}) no-repeat center center/cover;
    height: 100vh;
    color: #fff;
    font-family: 'Nunito', sans-serif;
 }
 * {
     box-sizing: border-box ;
     margin: 0;
     padding: 0;
 }
`;

ReactDOM.render(
  <>
    <App />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
