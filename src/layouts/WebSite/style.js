import React from 'react'
import styled, { css } from 'styled-components'

import { zIndex } from '../../settings/constants'
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
  z-index: ${zIndex.logo};
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
  bottom:0;
  left:0;
  width: 100%;
  height: 55px;
`

export const BackgroundBanner = styled.div`
  position: absolute;
  z-index: ${zIndex.bar};
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
  z-index: ${zIndex.bar + 1};
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
