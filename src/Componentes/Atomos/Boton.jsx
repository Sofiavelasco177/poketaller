const Boton = ({ href, etiqueta }) => {
    return (
      <a href={href} className="boton">
        {etiqueta}
      </a>
    );
  };
  
  export default Boton;
  
  