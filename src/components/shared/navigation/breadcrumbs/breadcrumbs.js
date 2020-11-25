import React from 'react'
import { Link } from 'gatsby'
// import { Trans } from '@lingui/macro'
// import { i18nMark } from '@lingui/react'
import './breadcrumbs.scss'

// TODO: how to translate link name dynamically?
const Breadcrumbs = ({ pathname }) => {
  const links = pathname.split('/').filter(str => str !== '') // ex: ["ja", "store"]

  let route = ''
  return (
    <ul className="breadcrumbs">
      {links.map((link, i) => {
        route += `/${link}`
        return (
          <li className="breadcrumbs__link" key={i}>
            {i !== 0 && <span>&gt;</span>}
            <Link to={route} activeClassName="breadcrumbs__link--active">
              {i !== 0 ? link : 'home'}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
