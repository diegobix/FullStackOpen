import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({lat, long, city}) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
  const [weather, setWeather] = useState(null)
  
  useEffect(() => {
    axios.get(url).then(res => {
      setWeather(res.data)
    })
  }, [])

  if (!weather)
    return(
      <div>
        Fetching weather...
      </div>
    )

  return (
    <div>
      <h4>Weather in {city}</h4>
      <div>Temperature: {weather.current_weather.temperature} ºC</div>
      <div>Wind: {weather.current_weather.windspeed} km/h</div>
    </div>
  );
}
 
export default Weather;