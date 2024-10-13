const Boton = ({ href, etiqueta, nuevaPestana = false }) => {
  return (
    <a 
      href={href} 
      className="boton" 
      target={nuevaPestana ? "_blank" : "_self"} 
      rel={nuevaPestana ? "noopener noreferrer" : ""}
    >
      {etiqueta}
    </a>
  );
};

export default Boton;

  