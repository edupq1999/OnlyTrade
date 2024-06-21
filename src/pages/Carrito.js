import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './styles/Carrito.css';

const Carrito = ({ isVisible, onClose }) => {
    const { items } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const handleBuy = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <div className={`carrito ${isVisible ? 'visible' : ''}`}>
            <button className="carrito-close" onClick={onClose}>X</button>
            <h2>Carrito de Compras</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={item.imagen} alt={item.nombreProducto} className="carrito-product-img" />
                        <span>{item.nombreProducto} - S/.{item.precio}</span>
                    </li>
                ))}
            </ul>
            <button className="carrito-buy" onClick={handleBuy}>Comprar</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Compra realizada con éxito!</p>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrito;
