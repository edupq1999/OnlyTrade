import React from 'react'
import './styles/Contacto.css'

const Contacto = () => {
  return (
    <section className='contact'>
      <form className='contact_form'>
        <div className='contact_form_field'>
        <label>Nombre: </label>
        <input type='text'></input>
        </div>
        <div className='contact_form_field'>
        <label>Número: </label>
        <input type='numebr'></input>
        </div>
        <div className='contact_form_field'>
        <label>Correo: </label>
        <input type='email'></input>
        </div>
        <div className='contact_form_field'>
        <label>Comentario: </label>
        <textarea></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  )
}

export default Contacto