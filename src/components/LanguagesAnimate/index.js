import React, { useState, useEffect } from 'react'
import { Bar } from '@nivo/bar'

const data = {
  2014: [
    { id: 'JavaScript', value: 2 },
    { id: 'Node.js', value: 1 },
    { id: 'Java', value: 2 },
    { id: 'PHP', value: 4 }
  ],
  2015: [
    { id: 'JavaScript', value: 3 },
    { id: 'Node.js', value: 2 },
    { id: 'Java', value: 2 },
    { id: 'PHP', value: 3 }
  ],
  2016: [
    { id: 'JavaScript', value: 3 },
    { id: 'Node.js', value: 3 },
    { id: 'Java', value: 3 },
    { id: 'PHP', value: 2 }
  ],
  2017: [
    { id: 'JavaScript', value: 4 },
    { id: 'Node.js', value: 4 },
    { id: 'Java', value: 4 },
    { id: 'PHP', value: 1 }
  ],
  2018: [
    { id: 'JavaScript', value: 4 },
    { id: 'Node.js', value: 4 },
    { id: 'Java', value: 3 }
  ],
  2019: [
    { id: 'JavaScript', value: 4 },
    { id: 'Node.js', value: 4 },
    { id: 'Java', value: 3 },
    { id: 'Kotlin', value: 1 }
  ],
  2020: [
    { id: 'JavaScript', value: 4 },
    { id: 'Node.js', value: 4 },
    { id: 'Java', value: 3 },
    { id: 'Kotlin', value: 2 }
  ]
}

const DataGenerator = (initialIndex) => {
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

const dataGenerator = DataGenerator(2014)

export const Languages = () => {
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
