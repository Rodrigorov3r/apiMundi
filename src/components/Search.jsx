import React, { useState } from 'react';
import Country from './Country';
import Filter from './Filter';

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
      ) : filtrar?.length === 1 ? (
        <Country filtrar={filtrar}/>
      ) : (
        <Filter filtrar={filtrar} setInput={setInput} />
      )}
    </>
  );
};

export default Search;
