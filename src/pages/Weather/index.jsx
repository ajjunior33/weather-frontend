import { useEffect, useState } from "react";
import {getWeather} from "../../services/getWeather";
import { Container } from "../../styles/Grid";
import { Description, Title } from "../../styles/Texts";

export function Weather(){

  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }, []);
  async function showPosition(position) {
    const data = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    const weather = await getWeather(data);
    setTemp(weather.main);
    setCity(weather.name);
    setIcon(weather.weather[0].icon);
  }
  return (
    <>
      <Container>
        {temp === null && <h1>Carregando...</h1>}
        {temp !== null && (
          <>
            <img
              src={`weather/${icon}.png`}
              alt="icon"
            />
            <Title>{temp.temp_min}º</Title>
            <Description>{city}</Description>
          </>
        )}
      </Container>
    </>
  );
}