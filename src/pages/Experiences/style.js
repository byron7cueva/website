import styled from 'styled-components'

export const ExpereiencesSection = styled.section`
  .experience__bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1em 0 0 1.5em;
    z-index: 1;
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
    padding-left: 2.5em;
    position: relative;
  }

  .experience__bar h5 span:before {
    content: '';
    width: 2em;
    top: 50%;
    border-bottom: 0.13em solid;
    position: absolute;
    left: 0;
  }
`
