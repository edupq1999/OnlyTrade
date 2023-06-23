import React from 'react'
import CartaProducto from './CartaProducto'
import './styles/ListaProductos.css'
import db from '../../utils/db.js'

const ListaProductos = ({filterCategory}) => {
  let filterdb = db.filter(product => product.categoriasProducto[0] === filterCategory);
        
  return (
    <div className='product_List'>
      {
        filterCategory !== 'new'
        ?
        filterdb?.map(product =>(
          <CartaProducto 
            key={product.id}
            producto={product}
          />
        ))
        :
        db?.map(product => (
          <CartaProducto 
            key={product.id}
            producto={product}
          />
        ))
      }
    </div>
  )
}

export default ListaProductos