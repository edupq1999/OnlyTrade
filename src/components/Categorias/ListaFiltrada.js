import React from 'react'
import ProductoFiltrado from './ProductoFiltrado'
import './styles/ListaFiltrada.css'
import db from '../../utils/db.js'

const ListaFiltrada = ({filtro}) => {

    let filterdb = db.filter(product => product.categoriasProducto[0] === filtro);

  return (
    <div className='filterList'>
      {
        filtro !== 'new'
        ?
        filterdb?.map(product =>(
          <ProductoFiltrado 
            key={product.id}
            producto={product}
          />
        ))
        :
        db?.map(product => (
          <ProductoFiltrado 
            key={product.id}
            producto={product}
          />
        ))
      }
    </div>
  )
}

export default ListaFiltrada