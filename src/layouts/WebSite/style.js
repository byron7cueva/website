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
  z-index: 2;
  top: 0;
  left: 0;
  width: 69px;
  height: 70px;
`

export const Path = ({ width = '100%', height = '100%' }) => {
  const Div = styled.div`
    position: absolute;
    width: ${width};
    height: ${height};
    mask-image: url(${pathLogo});
    mask-size: cover;
    background-color: rgba(49, 84, 124, 0.85);
    ${saturacionMask}
  `
  return <Div />
}

export const Logo = styled.div`
  position: absolute;
  z-index: 3;
  top: 10%;
  left: 5%;
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const Banner = styled.div`
  position: fixed;
  z-index: 2;
  bottom:0;
  left:0;
  width: 100%;
  height: 55px;
`

export const BackgroundBanner = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${banner});
  mask-size: cover;
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
    line-height: 1.2em;
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
  display: flex;
  bottom: 35px;
  right: 3%;
  width: 3em;
  height: 3em;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  background-color: var(--color-first);
  border-radius: 50%;
  box-shadow: 0px 0px 5px rgba(39, 44, 74, .5);
`
