import React from 'react';

const Country = ({ arrayPais, filtrar }) => {
  return (
    <>
      {filtrar.map((elem) => (
        <>
          <h1>{elem.name.common}</h1>
          <br />
          <p>{elem.capital}</p>
          <p>{elem.area}</p>
          <br />
          <b>languages:</b>
          <ul>
            {Object.entries(elem.languages).map(([key, value]) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
          <br />
          <img src={elem.flags.png} />
        </>
      ))}
    </>
  );
};

export default Country;
