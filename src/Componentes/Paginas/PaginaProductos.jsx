import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PaginaProductos.css';

const PaginaProductos = ({ pokemons }) => {
  const [initialPokemons, setInitialPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonDetails = async (pokemonList) => {
    const promises = pokemonList.map((pokemon) =>
      axios.get(pokemon.url).then((res) => res.data)
    );
    return Promise.all(promises);
  }; 

  useEffect(() => {
    const fetchInitialPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=8');
        const pokemonDetails = await fetchPokemonDetails(response.data.results);
        setInitialPokemons(pokemonDetails);
      } catch (err) {
        setError('Hubo un problema al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPokemons();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const allPokemons = [...initialPokemons, ...pokemons];

  return (
    <div className="pagina-productos">
      <h2>Lista de Pokémon</h2>
      <div className="cards-container">
        {allPokemons.map((pokemon, index) => (
          <div key={index} className="card">
            {pokemon.sprites ? (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            ) : (
              <p>Imagen no disponible</p>
            )}
            <h3>{pokemon.name}</h3>
            {pokemon.height && <p>Altura: {pokemon.height}</p>}
            {pokemon.weight && <p>Peso: {pokemon.weight}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaProductos;