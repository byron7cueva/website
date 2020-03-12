import React from 'react'

import { ContactSection } from './style'

export const Contact = () => (
  <ContactSection className='container-page'>
    <h2>Escríbeme</h2>
    <form>
      <input type='text' placeholder='Nombres' />
      <input type='email' placeholder='Correo' />
      <input type='text' placeholder='Asunto' />
      <textarea placeholder='Descripción' />
      <button className='btn'>Enviar</button>
    </form>
  </ContactSection>
)
