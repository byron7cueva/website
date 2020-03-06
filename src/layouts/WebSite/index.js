import React from 'react'

import { GlobalStyle } from '../../styles/GlobalStyle'
import { LogoContainer, Path, Logo, Banner, BackgroundBanner, ContentBanner, MenuButton } from './style'

export const WebSite = ({ children }) => (
  <>
    <GlobalStyle />
    <LogoContainer>
      <Path />
      <Path width='95%' height='95%' />
      <Logo />
    </LogoContainer>
    {children}
    <div>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
      <p>Hola esto es una prueba</p>
    </div>
    <MenuButton>
      <i className='icon-menu' />
    </MenuButton>
    <Banner>
      <BackgroundBanner />
      <ContentBanner>
        <p>byron7cueva@gmail.com</p>
        <p className='icons'>
          <a href='#' className='icon-linkedin' />
          <a href='#' className='icon-github' />
          <a href='#' className='icon-twitter' />
        </p>
      </ContentBanner>
    </Banner>
  </>
)
