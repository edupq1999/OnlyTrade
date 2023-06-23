import React, { useEffect, useState } from 'react'
import ListaFiltrada from '../components/Categorias/ListaFiltrada';

const Categorias = ({filtro}) => {

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
  
    if (filtro === 'hogar') {
      setTitle('Hogar');
      setInfo('Productos para tu hogar')
    }else if (filtro === 'tecnologia') {
      setTitle('Productos tecnológicos');
      setInfo('Productos técnologicos que te pueden interesar');
    }else if (filtro === 'prendas') {
      setTitle('Prendas');
      setInfo('Encuentra la prenda que necesites');
    }else {
      setTitle('Lista de los nuevos productos');
      setInfo('Productos recientemente agregados');
    }
  }, [filtro])
  
  return (
    <section className='shop_section'>
        <div className='shop_section_header'>
          <h2 className='shop_section_header_title'>{title}</h2>
          <p className='shop_section_header_info'>{info}</p>
        </div>
        <ListaFiltrada filtro={filtro}/>
    </section>
  )
}

export default Categorias