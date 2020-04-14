import styled from 'styled-components'

import { devices } from '../../settings/constants'

export const OpinionsSection = styled.section`
  .opinions__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${devices.phablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 4em);
  }
`
