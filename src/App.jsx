import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import PaginaInicio from '../src/Componentes/Paginas/PaginaInicio';
import PaginaProductos from '../src/Componentes/Paginas/PaginaProductos';
import PaginaAgregar from '../src/Componentes/Paginas/PaginaAgregar';
import BarraDeNavegacion from './Componentes/Organismos/BarraDeNavegacion';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);


  const agregarPokemon = (pokemon) => {
    setPokemons((prevPokemons) => [...prevPokemons, pokemon]);
  };

  return (
    <Router>
      <BarraDeNavegacion />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route
          path="/productos"
          element={<PaginaProductos pokemons={pokemons} />}
        />
        <Route
          path="/agregar"
          element={<PaginaAgregar agregarPokemon={agregarPokemon} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

