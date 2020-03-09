import { useState } from 'react'

export function useOpinionIndex (opinions) {
  const [index, setIndex] = useState(0)
  let opinion = opinions[index]

  const next = () => {
    const increment = index + 1
    increment === opinions.length ? toIndex(0) : toIndex(increment)
  }

  const prev = () => {
    const decrement = index - 1
    decrement === -1 ? toIndex(opinions.length - 1) : toIndex(decrement)
  }

  const toIndex = i => {
    const index = parseInt(i)
    if (index >= 0 && index < opinions.length) {
      setIndex(index)
      opinion = opinions[index]
    }
  }

  return [opinion, index, next, prev, toIndex]
}
