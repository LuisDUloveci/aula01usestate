import React, { useState } from 'react';
import './App.css';
import CalculadoraDeSoma from './componentes/soma';

function App() {
  const [contador, setContador] = useState(0);
  return (

    <div className='App'>
      <h1>Minha primeira calculadora</h1>
      <CalculadoraDeSoma/>
    </div>
  );
}

export default App;
