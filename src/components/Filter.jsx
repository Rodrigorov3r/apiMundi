import React, { useState } from 'react';
import Country from './Country';

const Filter = ({ filtrar, setInput }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen((current) => !current);
    setInput(e.target.value);
  };

  return (
    <>
      {filtrar.map((elem) => (
        <p key={elem.area}>
          {elem.name.common}
          <button value={elem.name.common} onClick={handleClick}>
            show
          </button>
          {isOpen && <Country filtrar={filtrar} setIsOpen={setIsOpen} />}
        </p>
      ))}
    </>
  );
};

export default Filter;
