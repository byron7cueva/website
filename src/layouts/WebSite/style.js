import React from 'react'
import styled, { css } from 'styled-components'

import pathLogo from '../../assets/img/all/pathLogo.svg'
import logo from '../../assets/img/all/logo.svg'
import banner from '../../assets/img/all/banner.svg'

const saturacionMask = css`
  backdrop-filter: saturate(100%) blur(4px);
  mask-repeat: no-repeat;
  mask-position: 100% 100%;
`

export const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 69px;
  height: 70px;
  z-index: 2;
`

export const Path = ({ width = '100%', height = '100%' }) => {
  const Div = styled.div`
    width: ${width};
    height: ${height};
    position: absolute;
    mask-image: url(${pathLogo});
    mask-size: cover;
    background-color: rgba(47,82,116,0.75);
    ${saturacionMask}
  `
  return <Div />
}

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  top: 10%;
  left: 5%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: absolute;
  z-index: 3;
`

export const Banner = styled.div`
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 55px;
  z-index: 2;
`

export const BackgroundBanner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mask-image: url(${banner});
  mask-size: cover;
  z-index: 3;
  background: linear-gradient(30deg,rgba(29, 209, 161, 0.8) 0%,rgba(255, 255, 255, 0.4) 60%);
  ${saturacionMask}
`

export const ContentBanner = styled.div`
  position: absolute;
  z-index: 4;
  padding: 0.5em;
  p {
    margin: 0;
    font-family: var(--font-title-family);
    font-weight: lighter;
  }
  p.icons {
    margin-top: 0.3em;
  }
  a {
    color: var(--color-dark);
    padding-right: 0.5em;
  }
`

export const MenuButton = styled.a`
  position: fixed;
  bottom: 35px;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  width: 3em;
  height: 3em;
  background-color: var(--color-first);
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(39, 44, 74, .5);
`
