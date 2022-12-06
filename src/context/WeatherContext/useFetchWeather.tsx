import { useEffect, useState } from "react";
import { WeatherState } from "./weather-context";

const getPosition = (): Promise<any> => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

export const useFetchWeather = (initialState: WeatherState) => {
  const [weather, setWeather] = useState<WeatherState | null>(initialState);

  const fetchWeather = async () => {
    let urlWeatherAPI;
    const URL_API_UK =
      "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m";

    try {
      const position = await getPosition();
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      urlWeatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m`;
    } catch (error: any) {
      console.error("Error Code = " + error.code + " - " + error.message);
      urlWeatherAPI = URL_API_UK;
    }

    try {
      const weatherRequest = await fetch(urlWeatherAPI);
      const weatherData = await weatherRequest.json();
      const temperature_2m: number[] = weatherData.hourly.temperature_2m;
      const temperatureSum = temperature_2m.reduce(
        (total, temperature) => (total += temperature),
        0
      );
      const currentWeather: WeatherState = {
        temperature: {
          min: Math.min(...temperature_2m),
          average: parseFloat(
            (temperatureSum / temperature_2m.length).toFixed(2)
          ),
          max: Math.max(...temperature_2m),
        },
      };
      setWeather(currentWeather);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return { weather };
};
