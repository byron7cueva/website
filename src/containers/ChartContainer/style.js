import React from 'react'
import styled from 'styled-components'

export const ChartContent = ({ children, height }) => {
  const Div = styled.div`
    overflow-x: scroll;
    .chart-content__content {
      width: 450px;
      height: ${height + 5}px;
    }
  `
  return (
    <Div>
      {children}
    </Div>
  )
}
