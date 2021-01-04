import React, { FunctionComponent, useEffect } from 'react'

import useScroll from '../../../../hooks/scroll-hook'
import useSideDrawer from '../../../../hooks/side-drawer-hook'
import useHasMounted from '../../../../hooks/client-only-hook'

import './layout.scss'
import BG from '../../ui-elements/bg/particles/particles'
import SideDrawer from '../side-drawer/side-drawer'
import Header from '../header/header'
import NavLinks from '../nav-links/nav-links'
import Language from '../language/language'
import Burger from '../burger/burger'
import Footer from '../footer/footer'
import SNS from '../sns/sns'
import Brand from '../brand/brand'
import Copyright from '../../ui-elements/copyright/copyright'

interface Props {
  pathname: string
}

const Layout: FunctionComponent<Props> = ({ children, pathname }) => {
  // Hooks
  const { isShow, setIsShow, scrollDownHideUpShow } = useScroll()
  const {
    drawerIsOpen,
    openDrawerHandler,
    closeDrawerHandler,
  } = useSideDrawer()

  scrollDownHideUpShow()

  // Show header when re-rendering happens
  useEffect(() => {
    setIsShow(false)
  }, [])

  let mq
  const hasMounted = useHasMounted()
  if (hasMounted) {
    mq = window.matchMedia('(max-width: 37.5em)')
  }

  return (
    <>
      <BG />
      {mq?.matches && (
        <Brand place="layout" className={isShow ? 'hide--mobile' : ''} />
      )}
      <Burger
        onClick={openDrawerHandler}
        isOpen={drawerIsOpen}
        className={isShow ? 'hide--mobile' : ''}
      />

      <SideDrawer show={drawerIsOpen} onCancel={closeDrawerHandler}>
        <nav className="side-drawer__nav">
          <NavLinks place="side-drawer" />
          <SNS width={20} height={20} place="side-drawer" />
        </nav>
        <div className="side-drawer__footer">
          <Language place="side-drawer" path={pathname} />
          <Copyright place="side-drawer" />
        </div>
      </SideDrawer>

      <Header className={isShow ? 'hide' : ''}>
        <Brand place="header" />
        <nav className="header__nav">
          <NavLinks place="header" />
          <Language place="header" path={pathname} />
        </nav>
      </Header>

      <main className="layout__main">{children}</main>

      <Footer>
        <div className="footer__left-wrapper">
          <Copyright place="footer" />
        </div>
        <div className="footer__right-wrapper">
          <SNS width={20} height={20} place="footer" />
        </div>
      </Footer>
    </>
  )
}

export default Layout
