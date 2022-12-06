import React from "react";
import styled from "styled-components";

interface HeaderCardProps {}

const StyledHeaderCard = styled.div`
  display: flex;
`;

const HeaderCard: React.FC<HeaderCardProps> = () => {
  return <StyledHeaderCard>HEADER</StyledHeaderCard>;
};

export default HeaderCard;
