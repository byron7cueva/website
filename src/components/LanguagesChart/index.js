import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { ChartContainer } from '../../containers/ChartContainer'
import { theme } from '../../settings/charts'
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
      height={height}
      data={data}
      keys={['value']}
      indexBy='id'
      layout='horizontal'
      margin={{ top: 20, right: 30, bottom: 0, left: 0 }}
      colorBy='indexValue'
      colors={[colors.orange, colors.greenDark, colors.blueLight, colors.coral]}
      enableGridX
      enableGridY={false}
      axisBottom={null}
      axisLeft={null}
      axisTop={{
        format: d => {
          switch (d) {
            case 1: return 'Aprendiz'
            case 2: return 'Básico'
            case 3: return 'Intermedio'
            case 4: return 'Avanzado'
            case 5: return 'Experto'
          }
        }
      }}
      barComponent={BarComponent}
      theme={theme}
    />
  </ChartContainer>
)