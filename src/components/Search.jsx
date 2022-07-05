import React, { useState } from 'react';

const Search = ({ arrayPais }) => {
  const [valor, setValor] = useState('');

  const handleInput = (e) => {
    const superValue = e.target.value;
    setValor(superValue);
  };

  const arrNombres = arrayPais
    .map((pais) => pais.name)
    .map((elemento) => elemento.common);

  const filtroPais =
    valor === ''
      ? arrNombres
      : arrNombres.filter((item) =>
          item.toLowerCase().includes(valor.toLowerCase())
        );

  const mostrarPais = (() =>
    filtroPais.map((pais, i) => <p key={i}>{pais}</p>))();

  return (
    <>
      <form>
        <label className="label-size">buscando paises: </label>
        <input type="text" onChange={handleInput} placeholder=" search..." />
      </form>
      {valor === '' ? null : mostrarPais}

    </>
  );
};

export default Search;
