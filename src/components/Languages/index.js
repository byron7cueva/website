import React from 'react'

import { ResponsiveBar } from '@nivo/bar'

const data = [
  { id: 'Java', value: 3 },
  { id: 'Kotlin', value: 2 },
  { id: 'JavaScript', value: 4 },
  { id: 'Node.js', value: 4 }
]

const BarComponent = props => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect width={props.width} height={props.height} fill={props.color} />
      <text
        x={props.width - 16}
        y={props.height / 2}
        textAnchor='end'
        dominantBaseline='central'
        fill='black'
        style={{
          fontSize: 13
        }}
      >
        {props.data.indexValue}
      </text>
    </g>
  )
}

export const Languages = () => (
  <article className='chart'>
    <h3>Languajes</h3>
    <ResponsiveBar
      height={150}
      data={data}
      keys={['value']}
      indexBy='id'
      layout='horizontal'
      margin={{ top: 20, right: 25, bottom: 0, left: 0 }}
      colorBy='indexValue'
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
    />
  </article>
)