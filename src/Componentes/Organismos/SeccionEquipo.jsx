import TarjetaMiembroEquipo from '../Moleculas/TarjetaMiembroEquipo';

const SeccionEquipo = () => {
  return (
    <div className="seccion-equipo">
      <TarjetaMiembroEquipo 
        imgSrc="imagenes/imagen.gisell.jpeg" 
        nombre="Integrante #1" 
        githubLink="https://github.com/juanperez" 
        linkedinLink="https://linkedin.com/in/juanperez" 
      />
      <TarjetaMiembroEquipo 
        imgSrc="imagenes/imagen.sofia.jpeg" 
        nombre="Integrante #2" 
        githubLink="https://github.com/anagomez" 
        linkedinLink="https://linkedin.com/in/anagomez" 
      />
      <TarjetaMiembroEquipo 
        imgSrc="imagenes/imagen.andrea.jpeg" 
        nombre="Integrante #3" 
        githubLink="https://github.com/anagomez" 
        linkedinLink="https://linkedin.com/in/anagomez" 
      />
    </div>
  );
};

export default SeccionEquipo;
