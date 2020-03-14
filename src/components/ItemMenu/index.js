import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { Li } from './style'

export const ItemMenu = ({ label, to }) => {
  const match = useRouteMatch({
    path: to,
    exact: true
  })
  return (
    <Li className={match ? 'active' : ''}>
      <div />
      <Link to={to}>{label}</Link>
    </Li>
  )
}
