import React, { useState } from 'react';
import axios from 'axios';
import Boton from '../Atomos/Boton'

const PáginaAgregar = ({ onAddPokemon,setProductos}) => {
  const [pokemonName, setPokemonName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokemonData = response.data;

      const newPokemon = {
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        image: pokemonData.sprites.front_default,
        // Puedes agregar más propiedades según necesites
      };

      onAddPokemon(newPokemon);
      setPokemonName('');
      alert('Pokémon agregado con éxito!');
    } catch (error) {
      console.error('Error al agregar el Pokémon:', error);
      setError('No se pudo encontrar el Pokémon. Verifica el nombre e intenta de nuevo.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Agregar Nuevo Pokémon</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nombre del Pokémon:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={pokemonName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
            placeholder="Ingresa el nombre del Pokémon"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Agregar Pokémon
        </button>
      </form>
    </div>
  );
};

export default PáginaAgregar;