import React from 'react'
import './sub-header.scss'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'

const SubHeader = ({ pathname }) => {
  return (
    <div className="sub-header">
      <Breadcrumbs pathname={pathname} />
    </div>
  )
}

export default SubHeader
