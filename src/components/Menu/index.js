import React from 'react'
import { ItemMenu } from '../ItemMenu'

import { Nav } from './style'

export const Menu = ({ isShow, onClickItem }) => (
  <Nav className={isShow ? 'show' : ''}>
    <div className='menu__mask' />
    <ul className='menu__content'>
      <ItemMenu to='/' label='Inicio' onClick={onClickItem} />
      <ItemMenu to='/about' label='Sobre mi' onClick={onClickItem} />
      <ItemMenu to='/opinions' label='Que dicen de mi trabajo' onClick={onClickItem} />
      <ItemMenu to='/experience' label='Experiencia' onClick={onClickItem} />
      <ItemMenu to='/skills' label='Habilidades' onClick={onClickItem} />
      <ItemMenu to='/contact' label='Escribeme' onClick={onClickItem} />
    </ul>
  </Nav>
)
