import React from 'react'
import { withPrefix } from 'gatsby'

interface Props {
  width: number
  height: number
  id: string
  color: string
}

const Icon = ({ width, height, id, color }: Props) => {
  return (
    <svg width={width} height={height} style={{ fill: color }}>
      <use xlinkHref={withPrefix(`sprite.svg#${id}`)}></use>
    </svg>
  )
}

export default Icon
