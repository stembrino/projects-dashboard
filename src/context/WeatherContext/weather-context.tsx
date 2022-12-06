import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetchWeather } from "./useFetchWeather";

export interface WeatherState {
  temperature: {
    min: number | null;
    average: number | null;
    max: number | null;
  };
}

const initialState: WeatherState = {
  temperature: { min: null, average: null, max: null },
};

const WeatherContext = createContext<WeatherState | null>(initialState);

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const { weather } = useFetchWeather(initialState);

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
