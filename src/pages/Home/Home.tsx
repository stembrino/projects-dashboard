import React from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card";
import Experiences from "../../components/Experiences/Experiences";

interface HomeProps {}

const StyledHome = styled.div`
  margin: 1.5em 1.5em 0 1.5em;
`;

const Home: React.FC<HomeProps> = () => {
  return (
    <StyledHome>
      <Experiences />
    </StyledHome>
  );
};

export default Home;
