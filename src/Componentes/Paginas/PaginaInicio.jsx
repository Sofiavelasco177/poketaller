import React from 'react';
import '../Estilos/PaginaInicio.css';
import SeccionEquipo from '../Organismos/SeccionEquipo';

const PaginaInicio = () => {
  return (
    <div className="pagina-inicio">
      <h1>Equipo de Desarrollo</h1>
      <SeccionEquipo />
    </div>
  );
};

export default PaginaInicio;
