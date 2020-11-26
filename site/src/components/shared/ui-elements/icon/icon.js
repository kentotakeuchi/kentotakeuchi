import React from 'react'
import { withPrefix } from 'gatsby'
import sprite from '../../../../../static/sprite.svg'

const Icon = ({ width, height, id, color }) => {
  console.log({ sprite })
  return (
    <svg width={width} height={height} style={{ fill: color }}>
      <use xlinkHref={withPrefix(`sprite.svg#${id}`)}></use>
    </svg>
  )
}

export default Icon
