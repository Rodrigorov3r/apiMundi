import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ filtrar, setIsOpen }) => {
  const [weather, setWeather] = useState([]);

  const theCountry = filtrar[0];

  const keyA = import.meta.env.VITE_OPEN_WEATHER_KEY;
  const url = 'https://api.openweathermap.org/data/2.5/weather?';

  const weatherData = () => {
    axios
      .get(
        `${url}q=${theCountry.capital}, ${theCountry.name.common}&appid=${keyA}`
      )
      .then((res) => setWeather(res.data));
  };

  useEffect(() => weatherData(), []);

  return (
    <>
      {
        <div key={theCountry.area}>
          <h1>{theCountry.name.common}</h1>
          <br />
          <p>{theCountry.capital}</p>
          <p>{theCountry.area}</p>
          <br />
          <b>languages:</b>
          <ul>
            {Object.entries(theCountry.languages).map(([key, value]) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
          <br />
          <img src={theCountry.flags.png} />
          <br />
          <h2>{`Weather in ${weather.name}`}</h2>
          //temperatura
          //icono
          //viento
        </div>
      }
      <button onClick={() => {}}>Close</button>
    </>
  );
};

export default Country;
