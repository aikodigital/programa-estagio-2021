
import { useEffect } from 'react';
import { AUTH_TOKEN } from './Api';
import './App.css';
import useFetch from './Hooks/useFetch';
import MapaVeiculos from './Components/MapaVeiculos/MapaVeiculos';

function App() {
  
  

  return (
    <div className="App">
      <MapaVeiculos/>
    </div>
  );
}

export default App;
