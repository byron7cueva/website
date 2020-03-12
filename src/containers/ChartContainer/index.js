import React from 'react'

import { ChartContent } from './style'

export const ChartContainer = ({ children, title, height }) => (
  <article>
    <h3>{title}</h3>
    <ChartContent height={height}>
      <div className='chart-content__content'>
        {children}
      </div>
    </ChartContent>
  </article>
)
