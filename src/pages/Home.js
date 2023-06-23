import React from 'react'
import './styles/Home.css'
import ListaProductos from '../components/Productos/ListaProductos'
import { useNavigate } from 'react-router-dom';

const Home = ({setFiltro}) => {

  const navigate = useNavigate();

  const filtro = (e)=>{
    setFiltro(e.target.id);
    navigate('/Categorias');
  }

  return (
    <main className='shop'>
      <section className='shop_section'>
        <div className='shop_section_category'>
          <div className='shop_section_header'>
            <h2 className='shop_section_header_title'>Nuevos productos</h2>
            <p className='shop_section_header_info'>Productos recientemente agregados</p>
          </div>
          <div className='shop_section_more'>
            <span onClick={filtro} className='shop_section_more_title' id='new'>Ver más</span>
          </div>
        </div>
        <ListaProductos filterCategory='new'/>
      </section>
      <section className='shop_section'>
        <div className='shop_section_category'>
          <div className='shop_section_header'>
            <h2 className='shop_section_header_title'>Tecnología</h2>
            <p className='shop_section_header_info'>Productos técnologicos que te pueden interesar</p>
          </div>
          <div className='shop_section_more'>
            <span onClick={filtro} className='shop_section_more_title' id='tecnologia'>Ver más</span>
          </div>
        </div>
        <ListaProductos filterCategory='tecnologia'/>
      </section>
      <section className='shop_section'>
        <div className='shop_section_category'>
            <div className='shop_section_header'>
              <h2 className='shop_section_header_title'>Prendas</h2>
              <p className='shop_section_header_info'>Encuentra la prenda que necesites</p>
            </div>
            <div className='shop_section_more'>
              <span onClick={filtro} className='shop_section_more_title' id='prendas'>Ver más</span>
            </div>
        </div>
        <ListaProductos filterCategory='prendas'/>
      </section>
      <section className='shop_section'>
        <div className='shop_section_category'>
          <div className='shop_section_header'>
            <h2 className='shop_section_header_title'>Hogar</h2>
            <p className='shop_section_header_info'>Productos para tu hogar</p>
          </div>
          <div className='shop_section_more'>
            <span onClick={filtro} className='shop_section_more_title' id='hogar'>Ver más</span>
          </div>
        </div>
        <ListaProductos filterCategory='hogar'/>
      </section>
    </main>
  )
}

export default Home