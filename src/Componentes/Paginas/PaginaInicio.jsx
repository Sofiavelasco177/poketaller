import React from 'react';
import '../Estilos/PaginaInicio.css';
import BarraNavegacion from '../Organismos/BarraDeNavegacion';
import SeccionEquipo from '../Organismos/SeccionEquipo';

const PaginaInicio = () => {
  return (
    <div>
      <BarraNavegacion />
      <h1>Equipo</h1>
      <SeccionEquipo />
    </div>
  );
};

export default PaginaInicio;
