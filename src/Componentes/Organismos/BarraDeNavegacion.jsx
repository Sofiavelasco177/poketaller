import { Link } from 'react-router-dom'; 
 

const BarraDeNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <Link to="/" className="boton">Team</Link>
      <Link to="/productos" className="boton">Pokedex</Link>
      <Link to="/agregar" className="boton">Form</Link>
    </nav>
  );
};

export default BarraDeNavegacion;
