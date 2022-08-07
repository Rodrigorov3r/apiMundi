import React from 'react';

const Country = ({ arrayPais, filtrar }) => {
  const Comopnente = (() => {
    switch (filtrar?.length) {
      case 1:
        filtrar.map((elem) => (
          <>
            <h1>{elem.name.common}</h1>
            <br />
            <p>{elem.capital}</p>
            <p>{elem.area}</p>
            <br />
            <b>languages:</b>
            <ul>
              {elem.languages.map((lengua) => (
                <li>{lengua}</li>
              ))}
            </ul>
            <br />
            <img src={elem.flags.png} />
          </>
        ));
        break;

      default:
        break;
    }
  })();
  return (
    <>
      {filtrar.map((elem) => (
        <p key={elem.area}>{elem.name.common}</p>
      ))}
    </>
  );
};

export default Country;
