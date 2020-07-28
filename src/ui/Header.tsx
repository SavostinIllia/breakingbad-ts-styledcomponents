import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 50px 0;
  text-align: center;
`;

const HeaderImg = styled.img`
  max-width: 100%;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderImg src={logo} alt="" />
    </HeaderWrapper>
  );
};

export default Header;
