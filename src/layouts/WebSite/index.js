import React, { useState } from 'react'

import { GlobalStyle } from '../../styles/GlobalStyle'
import { LogoSection } from '../../components/LogoSection'
import { Menu } from '../../components/Menu'
import { MenuButton } from '../../components/MenuButton'
import { Footer } from '../../components/Footer'

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
      <LogoSection />
      <main>
        {children}
      </main>
      <Menu isShow={showMenu} />
      <MenuButton isClicked={showMenu} onClick={() => { setShowMenu(!showMenu) }} />
      <Footer />
    </>
  )
}
