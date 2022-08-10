import React, { useState } from 'react';
import Country from './Country';

const Filter = ({ filtrar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((current) => !current);

  return (
    <>
      {filtrar.map((elem ,index) => (
        <p key={elem.area}>
          {elem.name.common}
          <button onClick={handleClick}>show</button>
          {isOpen && <Country filtrar={filtrar} />}
        </p>
      ))}
    </>
  );
};

export default Filter;
