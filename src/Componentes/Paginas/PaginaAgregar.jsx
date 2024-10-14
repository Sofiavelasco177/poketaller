import React, { useState } from 'react';
import '../Estilos/PaginaAgregar.css'
import axios from 'axios';

const PaginaAgregar = ({ agregarPokemon }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [error, setError] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pokemonName) {
      setError('Por favor, ingresa el nombre del Pokémon');
      return;
    }

    setError(null);
    setEnviado(false); // Reinicia el estado enviado

    try {
      // Validar si el Pokémon existe
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      
      // Si la respuesta es exitosa, agrega el Pokémon completo
      agregarPokemon(response.data);
      setEnviado(true);
      setPokemonName(''); // Limpiar el campo del formulario

    } catch (err) {
      // Manejar el error si el Pokémon no existe
      setError('Este Pokémon no existe. Por favor, verifica el nombre.');
    }
  };

  return (
    <div className="formulario-pokemon">
      <h1>Formulario de Pokémon</h1>
      {enviado && <p>Nombre del Pokémon enviado con éxito</p>}
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="pokemonName">Nombre del Pokémon:</label>
          <input
            type="text"
            id="pokemonName"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PaginaAgregar;
