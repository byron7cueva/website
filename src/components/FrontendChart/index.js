import React from 'react'
import { ResponsiveBump } from '@nivo/bump'

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
        fill='#272C4A'
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

export const FrontendChart = () => (
  <article className='chart'>
    <h3>Tecnologias Frontend</h3>
    <ResponsiveBump
      height={400}
      data={data}
      pointComponent={CustomPoint}
      margin={{ top: 20, right: 70, bottom: 100, left: 0 }}
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
      colors={['#1ea0f2', '#41c7c7', '#fbf34c', '#F649A7', '#FE6A6A', '#85EBA2', '#3ABBB3', '#EF8D33']}
      theme={{
        axis: {
          ticks: {
            line: { fill: '#e0e4e4' },
            text: {
              fill: '#e0e4e4',
              fontSize: 12,
              fontFamily: 'Titillium Web'
            }
          }
        },
        grid: {
          line: { stroke: '#cecdcc', strokeDasharray: '1 2', strokeOpacity: 0.4 }
        },
        tooltip: {
          container: { background: '#e0e4e4', color: '#273aa2', fontSize: 14, borderRadius: 0, boxShadow: '9px 9px 0 rgba(0, 0, 0, 0.15)' }
        },
        labels: {
          text: { fill: '#1a1f35', fontSize: 12, fontWeight: 500, fontFamily: 'Titillium Web', textShadow: '0px 2px 3px rgba(0,0,0,0.35)' }
        }
      }}
    />
  </article>
)
