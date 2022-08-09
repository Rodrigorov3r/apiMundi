import React from 'react';

const Country = ({ filtrar }) => {
  return (
    <>
      {filtrar.map((elem) => (
        <div key={elem.area}>
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
        </div>
      ))}
    </>
  );
};

export default Country;
