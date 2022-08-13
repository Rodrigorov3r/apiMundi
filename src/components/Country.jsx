import React from 'react';

const Country = ({ filtrar }) => {
  const theCountry = filtrar[0];
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
        </div>
      }
    </>
  );
};

export default Country;
