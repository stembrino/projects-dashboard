import React from "react";
import styled from "styled-components";

interface BodyCardProps {}

const StyledBodyCard = styled.div`
  display: flex;
`;

const BodyCard: React.FC<BodyCardProps> = () => {
  return <StyledBodyCard>BODY</StyledBodyCard>;
};

export default BodyCard;
