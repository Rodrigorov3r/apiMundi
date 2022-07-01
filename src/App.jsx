import { useState, useEffect } from 'react';
import axios from 'axios';
import './bitStyle.css';

function App() {
  const [valor, setValor] = useState('');
  const [arrayPais, setArrayPais] = useState([]);

  const handleInput = (e) => {
    const superValue = e.target.value;
    setValor(superValue);
  };

  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
      setArrayPais([response.data]);
    });
  }, []);

  //tenes que hacer el map para que c/objeto sea un pais

  return (
    <div className="body-font">
      <p>mI aPIMUNDI</p>
      <form>
        <label className="label-size">find countries: </label>
        <input type="text" onChange={handleInput} />
      </form>
    </div>
  );
}

export default App;
