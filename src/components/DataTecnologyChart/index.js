import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { ChartContainer } from '../../containers/ChartContainer'
import { colors } from '../../settings/constants'
import { barConfig, formatSkills } from '../../settings/charts'

const BarComponent = props => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect width={props.width} height={props.height} fill={props.color} />
      <text
        x={props.width / 2}
        y={props.height / 2}
        textAnchor='middle'
        dominantBaseline='central'
        fill={colors.light}
        style={{
          fontSize: 13
        }}
      >
        {formatSkills(props.data.value)}
      </text>
    </g>
  )
}

export const DataTecnologyChart = ({ data, height, width }) => (
  <ChartContainer title='Tecnologías de Datos' height={height} width={width}>
    <ResponsiveBar
      {...barConfig}
      margin={{ top: 10, right: 0, bottom: 30, left: 70 }}
      height={height}
      data={data}
      colors={[colors.fuchsia, colors.orange, colors.blueLight, colors.coral, colors.greenDark]}
      axisLeft={{
        format: formatSkills
      }}
      barComponent={BarComponent}
    />
  </ChartContainer>
)
