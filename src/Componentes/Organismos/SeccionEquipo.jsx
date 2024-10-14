import TarjetaMiembroEquipo from '../Moleculas/TarjetaMiembroEquipo';

const SeccionEquipo = () => {
  return (
    <div className="seccion-equipo">
      <div className='container'>
      <p className="mb-6">
        Somos un equipo apasionado de desarrolladoras con habilidades diversas y complementarias. 
        Nuestra misión es crear soluciones innovadoras y eficientes, aprovechando nuestras fortalezas individuales 
        para lograr resultados excepcionales en cada proyecto que emprendemos.
      </p>
      </div>
      <TarjetaMiembroEquipo 
        imgSrc="imagenes/imagen.gisell.jpg" 
        nombre="Gise" 
        githubLink="https://github.com/Gisell0511" 
        linkedinLink="https://www.linkedin.com/in/gisell-orozco-aa7b94205/" 
      />
      <TarjetaMiembroEquipo 
        imgSrc="imagenes/imagen.sofia.jpg" 
        nombre="Sofi" 
        githubLink="https://github.com/Sofiavelasco177" 
        linkedinLink="https://www.linkedin.com/in/sofia-velasco-0470b0333/"
      />
      <TarjetaMiembroEquipo 
        imgSrc="imagenes/imagen.andrea.jpg" 
        nombre="Pau" 
        githubLink="https://github.com/Andrea2147" 
        linkedinLink="https://www.linkedin.com/in/paula-ochoa-5760ab333/" 
      />
    </div>
  );
};

export default SeccionEquipo;
