import classes from "./Card.module.css";
import React from "react";
import styled from "styled-components";
import HeaderCard from "./Header/Header";
import BodyCard from "./Body/CardBody";
import FooterCard from "./Footer/Footer";

interface CardProps {}

const StyledCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid lightpink;
`;

const Card: React.FC<CardProps> = () => {
  return (
    <StyledCard>
      <HeaderCard />
      <BodyCard />
      <FooterCard />
    </StyledCard>
  );
};

export default Card;
