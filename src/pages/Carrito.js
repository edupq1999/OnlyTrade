import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './styles/Carrito.css';

const Carrito = ({ isVisible, onClose }) => {
    const { items, setItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const handleBuy = () => {
        if (items.length === 0) {
            alert('El carrito está vacío. No hay nada para comprar.');
            return;
        }

        const fileContent = items.map(item => `Producto: ${item.nombreProducto}, Total: S/.${item.precio}, Cantidad: ${item.cantidad}`).join('\n');
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'boleta.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setItems([]);
        localStorage.removeItem('cartItems');
        setShowModal(true);
    };


    const handleCloseModal = () => {
        setShowModal(false);
        onClose();
    };

    const subtotal = items.reduce((total, item) => total + item.precio * item.cantidad, 0);

    return (
        <div className={`carrito ${isVisible ? 'visible' : ''}`}>
            <button className="carrito-close" onClick={onClose}>X</button>
            <h2>Carrito de Compras</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={item.imagen} alt={item.nombreProducto} className="carrito-product-img" />
                        <span>{item.nombreProducto} - S/.{item.precio}</span>
                        <div className="carrito-quantity">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <span>{item.cantidad}</span>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="carrito-subtotal">
                SubTotal: S/.{subtotal}
            </div>
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
