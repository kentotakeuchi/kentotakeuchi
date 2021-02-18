import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import './nav-links.scss'

// DATA
const HEADER_LINK_LIST = [
  { name: t`video`, slug: 'videos' },
  { name: t`about`, slug: 'about' },
  { name: t`contact`, slug: 'contact' },
]

const SIDE_DRAWER_LINK_LIST = [
  { name: t`video`, slug: 'videos' },
  { name: t`about`, slug: 'about' },
  { name: t`contact`, slug: 'contact' },
]

interface Props {
  place: string
}

const NavLinks = ({ place }: Props) => {
  const { i18n } = useLingui()
  const { locale } = i18n

  let navLinksJSX
  switch (place) {
    case 'header':
      navLinksJSX = HEADER_LINK_LIST.map(({ name, slug }) => (
        <li key={slug}>
          <Link to={`/${locale}/${slug}`}>{i18n._(name)}</Link>
        </li>
      ))
      break
    case 'side-drawer':
      navLinksJSX = SIDE_DRAWER_LINK_LIST.map(({ name, slug }) => (
        <li key={slug}>
          <Link to={`/${locale}/${slug}`}>{i18n._(name)}</Link>
        </li>
      ))
      break
    default:
      navLinksJSX = null
      break
  }

  return <ul className={`nav-links nav-links--${place}`}>{navLinksJSX}</ul>
}

export default NavLinks
