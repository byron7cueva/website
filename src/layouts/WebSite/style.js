import React from 'react'
import styled, { css } from 'styled-components'

import pathLogo from '../../assets/img/all/pathLogo.svg'
import logo from '../../assets/img/all/logo.svg'
import banner from '../../assets/img/all/banner.svg'

const saturacionMask = css`
  backdrop-filter: saturate(180%) blur(3px) drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  mask-repeat: no-repeat;
  mask-position: 100% 100%;
`

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
    mask-size: cover;
    background-color: rgba(47,82,116,0.50);
    z-index: 1;
    ${saturacionMask}
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

export const Banner = styled.div`
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: 60px;
  z-index: 1;
`

export const BackgroundBanner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mask-image: url(${banner});
  mask-size: cover;
  z-index: 2;
  background: linear-gradient(30deg,rgba(25, 189, 140, 0.8) 0%,rgba(255, 255, 255, 0.49) 100%);
  ${saturacionMask}
`

export const ContentBanner = styled.div`
  position: absolute;
  z-index:3;
  padding: 0.5em;
  p {
    margin: 0;
    font-family: var(--font-subtitle);
  }
  p.icons {
    margin-top: 0.5em;
  }
  a {
    color: var(--color-dark);
    padding-right: 0.5em;
  }
`

export const MenuButton = styled.a`
  position: fixed;
  bottom: 7%;
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
