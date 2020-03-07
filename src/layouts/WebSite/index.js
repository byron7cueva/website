import React from 'react'

import { GlobalStyle } from '../../styles/GlobalStyle'
import { LogoContainer, Path, Logo, Banner, BackgroundBanner, ContentBanner, MenuButton } from './style'

/**
 * WebSite layout
 * @author byron7cueva
 * @param {Object} children Children elements
 */
export const WebSite = ({ children }) => (
  <>
    <GlobalStyle />
    <LogoContainer>
      <Path />
      <Path width='95%' height='95%' />
      <Logo />
    </LogoContainer>
    <main>
      {children}
    </main>
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
