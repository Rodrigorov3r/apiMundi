import React, { useState } from 'react';
import Country from './Country';

const Search = ({ arrayPais }) => {
  //1- state input
  const [input, setInput] = useState('');

  //2- busqueda
  const handleInput = (e) => {
    const superValue = e.target.value;
    setInput(superValue);
  };

  //3-funcion filtrar
  const filtrar = input
    ? arrayPais.filter((item) =>
        item.name.common.toLowerCase().includes(input.toLowerCase())
      )
    : null;
  return (
    <>
      <form>
        <label className="label-size">buscando paises: </label>
        <input value={input} onChange={handleInput} placeholder=" buscar..." />
      </form>
      <br />
      {input === '' ? (
        <p className="text-advisor">Buscate algo mostro</p>
      ) : input.length === 1 ? (
        <p className="text-advisor">Muchas datas</p>
      ) : filtrar.map((elem) => (
        <p key={elem.area}>{elem.name.common}</p>
      ))}
    </>
  );
};

export default Search;
