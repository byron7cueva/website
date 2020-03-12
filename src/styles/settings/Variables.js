import { css } from 'styled-components'

import { fonts, colors, size } from '../../settings/constants'

/**
 * Variables for style default
 */
export const Variables = css`
  :root {
    /* Colors */
    --color-first: ${colors.first};
    --color-second: ${colors.second};
    --color-alternative: ${colors.alternative};
    --color-light: ${colors.light};
    --color-dark: ${colors.dark};
    --color-gray: ${colors.gray};
    --color-gray-2: ${colors.gray2};
    --color-gray-4: ${colors.gray4};

    /* Color for backgrouns  */
    --color-background-light: rgba(223,230,233,0.45);

    /* Color text */
    --color-text-alternative: ${colors.grayDark};

    /* Fonts */
    --font-content-family: ${fonts.content}, sans-serif;
    --font-content-size: ${size.textContent};

    --font-title-family: ${fonts.title}, sans-serif;
    --font-title-article-family: ${fonts.titleArticle}, sans-serif;
    
    --font-icons-family: ${fonts.icons};
    --font-icons-size: ${size.icon};
    --font-icon-btn-size:${size.iconBtn};

    /* Text */
    --line-height-content: ${size.lineHeightContent};
  }
`
