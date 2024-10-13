import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PaginaProductos.css'; 

const PaginaProductos = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 const fetchPokemonDetails = async (pokemonList) => {
    const promises = pokemonList.map((pokemon) =>
      axios.get(pokemon.url).then((res) => res.data)
    );
    return Promise.all(promises); 
  };

 
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=8');
        const pokemonDetails = await fetchPokemonDetails(response.data.results);
        setPokemons(pokemonDetails);
      } catch (err) {
        setError('Hubo un problema al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pagina-productos">
      <h1>Lista de Pokémon</h1>
      <div className="cards-container">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaProductos;
