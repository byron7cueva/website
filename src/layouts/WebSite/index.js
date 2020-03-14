import React, { useState } from 'react'

import { GlobalStyle } from '../../styles/GlobalStyle'
import { LogoContainer, Path, Logo, Banner, BackgroundBanner, ContentBanner } from './style'
import { Menu } from '../../components/Menu'
import { MenuButton } from '../../components/MenuButton'

/**
 * WebSite layout
 * @author byron7cueva
 * @param {Object} children Children elements
 */
export const WebSite = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
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
      <Menu isShow={showMenu} />
      <MenuButton isClicked={showMenu} onClick={() => { setShowMenu(!showMenu) }} />
      <Banner>
        <BackgroundBanner />
        <ContentBanner>
          <p>2020 - Byron Cueva</p>
          <p className='icons'>
            <a href='https://www.linkedin.com/in/byron7cueva/' className='icon-linkedin' target='noopener noreferrer' />
            <a href='https://github.com/byron7cueva' className='icon-github' target='noopener noreferrer' />
            <a href='https://twitter.com/byron7cueva' className='icon-twitter' target='noopener noreferrer' />
          </p>
        </ContentBanner>
      </Banner>
    </>
  )
}
