import React, { useState } from 'react';

const Search = ({ arrayPais }) => {
  //1- state input
  const [input, setInput] = useState('');

  //2- busqueda
  const handleInput = (e) => {
    const superValue = e.target.value;
    setInput(superValue);
  };

  //3-funcion filtrar
  const filtrar = () =>{
    
  }



  return (
    <>
      <form>
        <label className="label-size">buscando paises: </label>
        <input value={input} onChange={handleInput} placeholder=" buscar..." />
      </form>
    </>
  );
};

export default Search;
