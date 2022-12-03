export function getWeather(data) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=1dbbaf0576e7be95a9583668b1862c6f&units=metric`;
  return fetch(url)
    .then((responseJSON) => responseJSON.json())
    .then((response) => response)
    .catch((err) => console.log(err));
}