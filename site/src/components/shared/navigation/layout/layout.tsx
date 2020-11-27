import React, { FunctionComponent /*useEffect*/ } from 'react'
import { Link } from 'gatsby'
import { useLingui } from '@lingui/react'

import useSiteMetadata from '../../../../hooks/site-metadata-hook'

import './layout.scss'

// import SideDrawer from '../side-drawer/side-drawer'
import BG from '../../ui-elements/bg/particles/particles'
import Header from '../header/header'
import NavLinks from '../nav-links/nav-links'
import Language from '../language/language'
// import Burger from '../burger/burger'
import Footer from '../footer/footer'
import SNS from '../sns/sns'
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
      <BG />
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

      <main style={{ height: '200vh' }}>{children}</main>

      <Footer>
        <div className="footer__left-wrapper">
          <small>
            © {new Date().getFullYear()} {i18n._('kento takeuchi')}
          </small>
        </div>
        <div className="footer__right-wrapper">
          <SNS width={20} height={20} place="footer" />
        </div>
      </Footer>
    </>
  )
}

export default Layout
