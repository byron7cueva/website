import React from 'react'
import { ResponsiveBump } from '@nivo/bump'

import { ChartContainer } from '../../containers/ChartContainer'
import { theme, formatSkills } from '../../settings/charts'
import { colors } from '../../settings/constants'

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
          {formatSkills(data.value)}
        </text>}
    </g>
  )
}

const format = d => {
  switch (d) {
    case 1: return 'Principal'
    case 4: return 'Sin uso'
    default: return d
  }
}

export const FrontendChart = ({ data, height, width }) => (
  <ChartContainer title='Tecnologias Frontend' height={height} width={width}>
    <ResponsiveBump
      height={height}
      data={data}
      pointComponent={CustomPoint}
      margin={{ top: 20, right: 150, bottom: 25, left: 150 }}
      lineWidth={4}
      activeLineWidth={5}
      inactiveLineWidth={3}
      axisTop={{ tickSize: 0, tickPadding: 9 }}
      axisBottom={{ tickSize: 0, tickPadding: 9 }}
      axisLeft={{
        tickSize: 80,
        tickPadding: 0,
        legend: 'Prioridad de uso',
        legendPosition: 'middle',
        legendOffset: -140,
        format: format
      }}
      axisRight={{
        tickSize: 80,
        tickPadding: 0,
        legend: 'Prioridad de uso',
        legendPosition: 'middle',
        legendOffset: 140,
        format: format
      }}
      startLabelPadding={10}
      endLabelPadding={10}
      pointSize={24}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      activePointSize={25}
      activePointBorderWidth={4}
      inactivePointSize={0}
      inactivePointBorderWidth={2}
      colors={[colors.blueLight, colors.greenLight, colors.orange, colors.coral]}
      theme={theme}
      startLabel={d => (d.id)}
    />
  </ChartContainer>
)
