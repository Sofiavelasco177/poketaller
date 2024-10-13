import { Link } from 'react-router-dom'; 
 

const BarraDeNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <Link to="/" className="boton">Inicio</Link>
      <Link to="/productos" className="boton">Lista de Tarjetas</Link>
      <Link to="/agregar" className="boton">Modificación</Link>
    </nav>
  );
};

export default BarraDeNavegacion;
