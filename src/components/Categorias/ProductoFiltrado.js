import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/ProductoFiltrado.css'

const ProductoFiltrado = ({producto}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/ProductoId/${producto.id}`)
    }

  return (
    <div className='productF' onClick={handleClick} id={producto?.name}>
        <div class="product_container">
            <div className='product_container_header'>
                <img className='productF_img' src={producto?.imagen} alt='Imagen del producto'/>
            </div>
            <div className='product_container_info'>
                <h2 className='product_name'>{producto?.nombreProducto}</h2>
                <span>Precio: <h3>S/.{producto?.precio}</h3></span>
            </div>
        </div>
        <div className="product_buttons">
            <button className="product_button message">
                Contactar
            </button>
            <button className="product_button buy">
                Comprar
            </button>
        </div>
    </div>
  )
}

export default ProductoFiltrado