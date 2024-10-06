import Imagen from '../Atomos/Imagen';
import Boton from '../Atomos/Boton';

const TarjetaMiembroEquipo = ({ imgSrc, nombre, githubLink, linkedinLink }) => {
  return (
    <div className="tarjeta-miembro-equipo">
      <Imagen src={imgSrc} alt={nombre} />
      <p>{nombre}</p>
      <Boton href={githubLink} etiqueta="GitHub" />
      <Boton href={linkedinLink} etiqueta="LinkedIn" />
    </div>
  );
};

export default TarjetaMiembroEquipo;
