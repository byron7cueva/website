import React from 'react'
import { ResponsiveBump } from '@nivo/bump'

import { ChartContainer } from '../../containers/ChartContainer'
import { theme } from '../../settings/charts'
import { colors } from '../../settings/constants'

const data = [
  {
    id: 'React.js',
    data: [
      { x: 2016, y: null },
      { x: 2017, y: null },
      { x: 2018, y: null },
      { x: 2019, y: 1, use: 'Básico' },
      { x: 2020, y: 1, use: 'Intermedio' }
    ]
  },
  {
    id: 'Vue.js',
    data: [
      { x: 2016, y: null },
      { x: 2017, y: null },
      { x: 2018, y: 2, use: 'Aprendiz' },
      { x: 2019, y: 2, use: 'Básico' },
      { x: 2020, y: 2, use: 'Intermedio' }
    ]
  },
  {
    id: 'Angular.js',
    data: [
      { x: 2016, y: 1, use: 'Intermedio' },
      { x: 2017, y: 1, use: 'Avanzado' },
      { x: 2018, y: 4, use: 'Descartado' },
      { x: 2019, y: 4, use: 'Descartado' },
      { x: 2020, y: 4, use: 'Descartado' }
    ]
  },
  {
    id: 'Angular',
    data: [
      { x: 2016, y: null },
      { x: 2017, y: null },
      { x: 2018, y: 2, use: 'Aprendiz' },
      { x: 2019, y: 3, use: 'Básico' },
      { x: 2020, y: 3, use: 'Básico' }
    ]
  }
]

const CustomPoint = ({ x, y, size, borderColor, borderWidth, data, isInactive }) => {
  return (
    <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
      <circle
        r={size}
        fill={colors.grayDark}
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
      {!isInactive &&
        <text textAnchor='middle' y={4} fill={borderColor} style={{ fontSize: 9 }}>
          {data.use}
        </text>}
    </g>
  )
}

export const FrontendChart = ({ height }) => (
  <ChartContainer title='Tecnologias Frontend' height={height}>
    <ResponsiveBump
      height={height}
      data={data}
      pointComponent={CustomPoint}
      margin={{ top: 20, right: 75, bottom: 25, left: 0 }}
      lineWidth={4}
      activeLineWidth={5}
      inactiveLineWidth={3}
      enableGridY={false}
      axisTop={{ tickSize: 0, tickPadding: 9 }}
      axisBottom={{ tickSize: 0, tickPadding: 9 }}
      axisLeft={null}
      axisRight={null}
      startLabelPadding={20}
      endLabelPadding={20}
      pointSize={24}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      activePointSize={25}
      activePointBorderWidth={4}
      inactivePointSize={0}
      inactivePointBorderWidth={2}
      colors={[colors.blueLight, colors.greenLight, colors.fuchsia, colors.coral]}
      theme={theme}
    />
  </ChartContainer>
)
