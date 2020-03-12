import React from 'react'
import styled from 'styled-components'

export const ChartContent = ({ children, height, width = 400 }) => {
  const Div = styled.div`
    overflow-x: scroll;
    .chart-content__content {
      width: ${width}px;
      min-width: 400px;
      height: ${height + 5}px;
    }
  `
  return (
    <Div>
      {children}
    </Div>
  )
}
