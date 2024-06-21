import './App.css';
import Categorias from './pages/Categorias';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import ProductoId from './pages/ProductoId';
import Home from './pages/Home';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { Route, Routes } from 'react-router-dom';
import Header from './components/General/Header';
import Navbar from './components/General/Navbar';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';

function App() {
  const [filtro, setFiltro] = useState('a');
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Navbar />
        <div className='contenedor'>
          <Routes>
            <Route path='/' element={<Home setFiltro={setFiltro}/>} />
            <Route path='/Acerca' element={<Acerca />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Categorias' element={<Categorias filtro={filtro} />} />
            <Route element={<ProtectedRoutes />} />
            <Route path='/ProductoId/:id' element={<ProductoId />} />
            <Route path='/Perfil' element={<ProductoId />} />
            <Route />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
