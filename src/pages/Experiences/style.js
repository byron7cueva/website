import styled from 'styled-components'

import { zIndex } from '../../settings/constants'

export const ExpereiencesSection = styled.section`
  .experience__bar {
    position: fixed;
    z-index: ${zIndex.bar};
    top: 0;
    left: 0;
    width: 100%;
    padding: 1em 0 0 1.5em;
  }

  .experience__bar.blur {
    backdrop-filter: saturate(10%) blur(5px);
    background-color: rgba(255,255,255,0.6);
  }

  .experience__bar h2 {
    margin-bottom: 0.3em;
  }

  .experience__bar h5 {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .experience__bar h5 span {
    position: relative;
    padding-left: 2.5em;
  }

  .experience__bar h5 span:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 2em;
    content: '';
    border-bottom: 0.13em solid;
  }
`
