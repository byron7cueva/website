import React, { useState, useEffect } from 'react'
import { Bar } from '@nivo/bar'

const DataGenerator = (initialIndex, data) => {
  let index = initialIndex
  let state = data[initialIndex]

  return {
    increment: () => {
      index++
      state = data[index]
    },
    getData: () => {
      return { index, state }
    },
    hasNextData: () => {
      return data[index + 1] !== undefined
    }
  }
}

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

export const Languages = ({ data = [] }) => {
  const dataGenerator = DataGenerator(2014, data)
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (dataGenerator.hasNextData()) {
        dataGenerator.increment()
        setCurrent(current + 1)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [current, setCurrent])

  const yearData = dataGenerator.getData()
  const barData = [...yearData.state].sort((a, b) => a.value - b.value)

  return (
    <>
      <h3 style={{ marginLeft: 60, fontWeight: 400, color: '#555' }}>
        Conocimiento de técnologías vs tiempo {' '}
        <strong style={{ color: 'black', fontWeight: 900 }}>{yearData.index}</strong>
      </h3>
      <Bar
        width={500}
        height={300}
        layout='horizontal'
        margin={{ top: 26, right: 120, bottom: 26, left: 60 }}
        data={barData}
        indexBy='id'
        keys={['value']}
        colorBy='indexValue'
        borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
        enableGridX
        enableGridY={false}
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
        axisBottom={null}
        axisLeft={null}
        padding={0.3}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
        isInteractive={false}
        barComponent={BarComponent}
      />
    </>
  )
}
