import React, { FunctionComponent /*useEffect*/ } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'

import useSiteMetadata from '../../../../hooks/site-metadata-hook'

import './layout.scss'

// import SideDrawer from '../side-drawer/side-drawer'
import Header from '../header/header'
import NavLinks from '../nav-links/nav-links'
import Language from '../language/language'
// import Burger from '../burger/burger'
// import Footer from '../footer/footer'
// import Language from '../language/language'
// import SNS from '../sns/sns'
// import Icon from '../../ui-elements/icon/icon'

interface Props {
  pathname: string
}

const Layout: FunctionComponent<Props> = ({ children, pathname }) => {
  // Hooks
  const { i18n } = useLingui()
  const { locale } = i18n
  const { titleJa, titleEn } = useSiteMetadata()

  return (
    <>
      <div className="layout__header">
        <Header>
          <div className="header__title-wrapper">
            <Link to={`/${locale}`}>
              <h1
                className={`header__title ${
                  locale === 'en' && 'header__title--en'
                }`}
              >
                {locale === 'ja' ? titleJa : titleEn}
              </h1>
            </Link>
          </div>
          <nav className="header__nav">
            <NavLinks place="header" />
            <Language place="header" path={pathname} />
            {/* <Burger onClick={openDrawerHandler} isOpen={drawerIsOpen} /> */}
          </nav>
        </Header>
      </div>

      <main>{children}</main>
    </>
  )
}

export default Layout
