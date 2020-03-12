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
          <a href='https://www.linkedin.com/in/byron7cueva/' className='icon-linkedin' target='noopener noreferrer' />
          <a href='https://github.com/byron7cueva' className='icon-github' target='noopener noreferrer' />
          <a href='https://twitter.com/byron7cueva' className='icon-twitter' target='noopener noreferrer' />
        </p>
      </ContentBanner>
    </Banner>
  </>
)
