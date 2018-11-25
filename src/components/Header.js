import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivHeader = styled.div`
  text-align: center;
  background-color: aqua;
  h1 {
    font-size: 72px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Header = () => {
  return (
    <DivHeader>
      <h1>React Router Mini</h1>
      <Navigation />
    </DivHeader>
  );
};

export default Header;