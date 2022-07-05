import { useState, useEffect } from 'react';
import axios from 'axios';
import './bitStyle.css';
import Search from './components/Search';

function App() {
  const [arrayPais, setArrayPais] = useState([]);

  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    axios.get(url).then((response) => {
      setArrayPais(response.data);
    });
  }, []);

  return (
    <div className="body-font">
      <p>mI aPIMUNDI</p>
      <Search arrayPais={arrayPais} />
    </div>
  );
}

export default App;
