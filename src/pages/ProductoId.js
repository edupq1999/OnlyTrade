import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/ProductoId.css'
import db from '../utils/db.js'

const ProductoId = () => {

  const [producto, setProducto] = useState()

  const {id} = useParams();
  useEffect(() => {
    const product = db.filter(producto => producto.id == id);
    setProducto(product[0])
  }, [])
  

  return (
    <div className='productoId' id={producto?.name}>
        <div class="productoId_container">
            <div className='productoId_container_header'>
                <img className='productoId_img' src={producto?.imagen} alt='Imagen del producto'/>
            </div>
            <div className='productoId_container_info'>
                <h2 className='productoId_name'>{producto?.nombreProducto}</h2>
                <p>{producto?.descripcionProducto}</p>
                <span>Precio: <h3>S/.{producto?.precio}</h3></span>
            </div>
        </div>
        <div class="productoId_buttons">
            <button class="productoId_button message">
                Contactar
            </button>
            <button class="productoId_button buy">
                Comprar
            </button>
        </div>
    </div>
  )
}

export default ProductoId