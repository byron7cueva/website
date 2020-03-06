import React from 'react'

import { GlobalStyle } from '../../styles/GlobalStyle'
import { LogoContainer, Path, Logo } from './style'

export const WebSite = ({ children }) => (
  <>
    <GlobalStyle />
    <LogoContainer>
      <Path />
      <Path width='95%' height='95%' />
      <Logo />
    </LogoContainer>
    {children}
  </>
)
