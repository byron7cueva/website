import { css } from 'styled-components'

/**
 * Styles for icons
 */
export const Icons = css`
  [class^="icon-"], [class*=" icon-"] {
    font-family: var(--font-icons-family);
    font-size: var(--font-icons-size);
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-logo:before {
    content: "\\e900";
  }
  .icon-ondas:before {
    content: "\\e901";
  }
  .icon-github:before {
    content: "\\e902";
  }
  .icon-twitter:before {
    content: "\\e903";
  }
  .icon-linkedin:before {
    content: "\\e904";
  }
  .icon-quotations:before {
    content: "\\e905";
  }
  .icon-menu:before {
    content: "\\e906";
  }
  .icon-circle-empty:before {
    content: "\\e907";
  }
  .icon-circle-slelected:before {
    content: "\\e908";
  }
  .icon-arrow_right:before {
    content: "\\e909";
  }
  .icon-arrow_left:before {
    content: "\\e90a";
  }
  .icon-arrow_carrot-down:before {
    content: "\\e90b";
  }
`
