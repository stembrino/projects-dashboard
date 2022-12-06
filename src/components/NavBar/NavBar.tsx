import React, { useEffect } from "react";
import styled from "styled-components";
import WeatherInfo from "./WeatherInfo/WeatherInfo";

interface NavBarProps {}

const StyledNavBar = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  border: 3px solid white;

  background: #ba5370; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f4e2d8,
    #ba5370
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f4e2d8,
    #ba5370
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <StyledNavBar>
      <WeatherInfo />
    </StyledNavBar>
  );
};

export default NavBar;
