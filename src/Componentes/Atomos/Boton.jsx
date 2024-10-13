const Boton = ({ etiqueta, tipo = "boton", onClick, disabled = false }) => {
  return (
    <button 
      type={tipo}
      className="boton" 
      onClick={onClick}
      disabled={disabled}
    >
      {etiqueta}
    </button>
  );
};

export default Boton;
