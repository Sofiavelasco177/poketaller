import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicio from '../src/Componentes/Paginas/PaginaInicio';
import PaginaProductos from '../src/Componentes/Paginas/PaginaProductos';
import PaginaAgregar from '../src/Componentes/Paginas/PaginaAgregar';
import BarraDeNavegacion from './Componentes/Organismos/BarraDeNavegacion';
import './App.css';

function App() {
  return (
    <Router>
      <BarraDeNavegacion />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/productos" element={<PaginaProductos />} />
        <Route path="/agregar" element={<PaginaAgregar />} />
      </Routes>
    </Router>
  );
}

export default App;
