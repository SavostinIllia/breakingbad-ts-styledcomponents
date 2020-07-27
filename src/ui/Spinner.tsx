import React from "react";
import spinner from "../img/spinner.gif";
import styled from "styled-components";

const SpinnerGif = styled.img`
  width: 200px;
`;

const Spinner: React.FC = () => {
  return <SpinnerGif src={spinner} alt="Breakin bad Api Spinner" />;
};
export default Spinner;
