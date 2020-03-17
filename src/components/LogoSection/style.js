import styled from 'styled-components'

import { zIndex } from '../../settings/constants'
import pathLogo from '../../assets/img/all/pathLogo.svg'
import logo from '../../assets/img/all/logo.svg'
import { saturacionMask } from '../../styles/mixins/Background'

export const LogoContainer = styled.div`
  position: fixed;
  z-index: ${zIndex.logo};
  top: 0;
  left: 0;
  width: 69px;
  height: 70px;
`

export const Path = styled.div.attrs(props => ({
  width: props.width || '100%',
  height: props.height || '100%'
}))`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  mask-image: url(${pathLogo});
  mask-size: cover;
  background-color: rgba(49, 84, 124, 0.85);
  ${saturacionMask}
`

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
