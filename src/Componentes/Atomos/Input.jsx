import React from 'react';
import './Input.css'; // Opcional: agrega estilos personalizados si lo deseas

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
            className="input-field"
        />
    );
};

export default Input;
