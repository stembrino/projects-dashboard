import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

interface ExperiencesProps {}

const StyledExperiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Experiences: React.FC<ExperiencesProps> = () => {
  return (
    <StyledExperiences>
      <Card />
      <Card />
      <Card />
    </StyledExperiences>
  );
};

export default Experiences;
