import React from 'react'
import './styles/ProductoSubasta.css'

const ProductoSubasta = () => {
  return (
    <div className='productSubasta'>
        <div class="productSubasta_container">
            <div className='productSubasta_container_header'>
                <h2 className='productSubasta_name'>Televisor</h2>
                <img className='productSubasta_img' src='https://home.ripley.com.pe/Attachment/WOP_5/2018295640212/2018295640212_2.jpg' alt='Imagen del producto'/>
            </div>
            <div className='productSubasta_container_info'>
                <h3>Tiempo: 00:00:00</h3>
                <h3>Mayor monto: S/.00.00</h3>
            </div>
        </div>
        <div class="productSubasta_buttons">
            <button class="productSubasta_button bid">
                Pujar +S/.00.00
            </button>
        </div>
    </div>
  )
}

export default ProductoSubasta