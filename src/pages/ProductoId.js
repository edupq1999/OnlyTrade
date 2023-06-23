import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/ProductoId.css'
import db from '../utils/db.js'

const ProductoId = () => {

  const [producto, setProducto] = useState()

  const {id} = useParams();
  useEffect(() => {
    const product = db.filter(producto => producto.id === parseInt(id));
    setProducto(product[0])
    }, [id])

console.log(id)

  return (
    <div className='productoId' id={producto?.name}>
        <div className="productoId_container">
            <div className='productoId_container_header'>
                <img className='productoId_img' src={producto?.imagen} alt='Imagen del producto'/>
            </div>
            <div className='productoId_container_info'>
                <h2 className='productoId_name'>{producto?.nombreProducto}</h2>
                <p>{producto?.descripcionProducto}</p>
                <span>Precio: <h3>S/.{producto?.precio}</h3></span>
            </div>
        </div>
        <div className="productoId_buttons">
            <button className="productoId_button message">
                Contactar
            </button>
            <button className="productoId_button buy">
                Comprar
            </button>
        </div>
    </div>
  )
}

export default ProductoId