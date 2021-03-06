import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { ChartContainer } from '../../containers/ChartContainer'
import { barConfig, formatSkills } from '../../settings/charts'
import { colors } from '../../settings/constants'

const BarComponent = props => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect width={props.width} height={props.height} fill={props.color} />
      <text
        x={props.width - 16}
        y={props.height / 2}
        textAnchor='end'
        dominantBaseline='central'
        fill={colors.light}
        style={{
          fontSize: 13
        }}
      >
        {props.data.indexValue}
      </text>
    </g>
  )
}

export const LanguagesChart = ({ data = [], height }) => (
  <ChartContainer title='Languajes y plataformas' height={height}>
    <ResponsiveBar
      {...barConfig}
      height={height}
      data={data}
      layout='horizontal'
      margin={{ top: 20, right: 30, bottom: 30, left: 0 }}
      colors={[colors.orange, colors.greenDark, colors.blueLight, colors.coral]}
      enableGridX
      enableGridY={false}
      axisLeft={null}
      axisTop={{
        format: formatSkills
      }}
      axisBottom={{
        format: formatSkills
      }}
      barComponent={BarComponent}
    />
  </ChartContainer>
)
