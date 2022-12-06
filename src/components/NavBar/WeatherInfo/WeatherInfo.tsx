import React, { useEffect } from "react";
import styled from "styled-components";
import { useWeatherContext } from "../../../context/WeatherContext/weather-context";

const StyledWeatherInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 10px;
`;

const StyledWeatherLabel = styled.div`
  color: white;
  font-size: 0.8rem;
  font-weight: 900;
`;

const WeatherInfo: React.FC = () => {
  const wetherContext = useWeatherContext();

  return (
    <>
      {wetherContext && (
        <StyledWeatherInfo>
          <StyledWeatherLabel>&#8451;</StyledWeatherLabel>
          <StyledWeatherLabel>
            &#8595; {wetherContext.temperature.min}
          </StyledWeatherLabel>
          <StyledWeatherLabel>
            {wetherContext.temperature.average}
          </StyledWeatherLabel>
          <StyledWeatherLabel>
            &#8593; {wetherContext.temperature.max}
          </StyledWeatherLabel>
        </StyledWeatherInfo>
      )}
    </>
  );
};

export default WeatherInfo;
