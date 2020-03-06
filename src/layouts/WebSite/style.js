import React from 'react'
import styled from 'styled-components'

import pathLogo from '../../assets/all/pathLogo.svg'
import logo from '../../assets/all/logo.svg'

export const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 79px;
  height: 80px;
`

export const Path = ({ width = '100%', height = '100%' }) => {
  const Div = styled.div`
    width: ${width};
    height: ${height};
    position: absolute;
    mask-image: url(${pathLogo});
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: cover;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(47,82,116,0.50);
    z-index: 1;
  `
  return <Div />
}

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  top: 15%;
  left: 10%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  z-index: 2;
`
