import React, { useState } from 'react';

const Filter = ({ filtrar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {filtrar.map((elem) => (
        <p key={elem.area}>
          {elem.name.common}
          {/* <button onClick={() => setIsOpen(true)}>show</button>
    <Modal open={isOpen} /> */}
        </p>
      ))}
    </>
  );
};

export default Filter;
