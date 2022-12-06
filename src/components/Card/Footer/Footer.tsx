import React from "react";
import styled from "styled-components";

interface FooterCardProps {}

const StyledFooterCard = styled.div`
  display: flex;
`;

const FooterCard: React.FC<FooterCardProps> = () => {
  return <StyledFooterCard>FOOTER</StyledFooterCard>;
};

export default FooterCard;
