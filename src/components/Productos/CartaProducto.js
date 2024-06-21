import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CartaProducto.css';
import { CartContext } from '../../context/CartContext';

const CartaProducto = ({ producto }) => {
    const navigate = useNavigate();
    const { addProduct } = useContext(CartContext);

    const handleClick = () => {
        navigate(`/ProductoId/${producto.id}`);
    };

    return (
        <div className='product' onClick={handleClick}>
            <div className="product_container">
                <div className='product_container_header'>
                    <img className='product_img' src={producto.imagen} alt='Imagen del producto' />
                </div>
                <div className='product_container_info'>
                    <h2 className='product_name'>{producto.nombreProducto}</h2>
                    <span>Precio: <h3>S/.{producto.precio}</h3></span>
                </div>
            </div>
            <div className="product_buttons">
                <button className="product_button message">
                    Contactar
                </button>
                <button className="product_button buy" onClick={(e) => { e.stopPropagation(); addProduct(producto); }}>
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default CartaProducto;
