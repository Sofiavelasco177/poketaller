import React, { useState, useEffect } from "react";
import "./App.css";

// Componente para la pantalla de inicio (equipo)
const Inicio = () => {
  const equipo = [
    {
      nombre: "Gisell",
      foto: "imagenes/imagen.gisell.jpeg",
      github: "https://github.com/juanperez",
      linkedin: "https://linkedin.com/in/juanperez",
    },
    {
      nombre: "Sofia",
      foto: "imagenes/imagen.sofia.jpeg",
      github: "https://github.com/anagomez",
      linkedin: "https://linkedin.com/in/anagomez",
    },
    {
      nombre: "Andrea",
      foto: "imagenes/imagen.andrea.jpeg",
      github: "https://github.com/anagomez",
      linkedin: "https://linkedin.com/in/anagomez",
    },
    // Agrega más miembros del equipo aquí
  ];

  return (
    <div className="team-section">
      {equipo.map((miembro, index) => (
        <div className="team-member-card" key={index}>
          <img src={miembro.foto} alt={miembro.nombre} />
          <p>{miembro.nombre}</p>
          <a href={miembro.github} className="button" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={miembro.linkedin} className="button" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      ))}
    </div>
  );
};

// Componente para la lista de cards (consumiendo una API)
const ListaDeCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (cards.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=5") // Ejemplo con la API de Pokémon
        .then((response) => response.json())
        .then((data) => {
          const pokemons = data.results.map((pokemon, index) => ({
            id: index + 1,
            nombre: pokemon.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          }));
          setCards(pokemons);
        })
        .catch((error) => console.error("Error al obtener los datos:", error));
    }
  }, [cards]);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.imagen} alt={card.nombre} />
          <h3>{card.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

// Componente para el formulario de modificación
const Modificacion = ({ agregarCard }) => {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre && imagen) {
      agregarCard({ nombre, imagen });
      setNombre("");
      setImagen("");
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <label>Nombre del elemento:</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <label>URL de la imagen:</label>
      <input
        type="url"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        placeholder="URL de la imagen"
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

// Componente principal de la aplicación
const App = () => {
  const [pantallaActual, setPantallaActual] = useState("inicio");
  const [cards, setCards] = useState([]);

  const cambiarPantalla = (pantalla) => setPantallaActual(pantalla);

  const agregarCard = (nuevoCard) => {
    setCards([nuevoCard, ...cards]); // Añade el nuevo elemento al inicio de la lista
  };

  return (
    <div className="container">
      <nav>
        <button onClick={() => cambiarPantalla("inicio")}>Inicio</button>
        <button onClick={() => cambiarPantalla("cards")}>Lista de Cards</button>
        <button onClick={() => cambiarPantalla("modificacion")}>Modificación</button>
      </nav>

      <div className="page-content">
        {pantallaActual === "inicio" && <Inicio />}
        {pantallaActual === "cards" && <ListaDeCards />}
        {pantallaActual === "modificacion" && <Modificacion agregarCard={agregarCard} />}
      </div>
    </div>
  );
};

export default App;

