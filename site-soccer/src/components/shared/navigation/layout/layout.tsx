import React, { FunctionComponent, useEffect } from 'react'

import useScroll from '../../../../hooks/scroll-hook'
import useSideDrawer from '../../../../hooks/side-drawer-hook'
import useHasMounted from '../../../../hooks/client-only-hook'

import './layout.scss'
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

  // Show header after page transition
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
      {mq?.matches && <Brand place="layout" />}
      <Burger onClick={openDrawerHandler} isOpen={drawerIsOpen} />

      <SideDrawer show={drawerIsOpen} onCancel={closeDrawerHandler}>
        <nav className="side-drawer__nav">
          <NavLinks place="side-drawer" />
        </nav>
        <div className="side-drawer__footer">
          <Language place="side-drawer" path={pathname} />
          <Copyright />
        </div>
      </SideDrawer>

      {/* TODO: add animation */}
      <Header className={isShow ? 'hide' : ''}>
        <Brand place="header" />
        <nav className="header__nav">
          <NavLinks place="header" />
          <Language place="header" path={pathname} />
        </nav>
      </Header>

      <main className="layout__main">{children}</main>

      <Footer>
        <Copyright />
      </Footer>
    </>
  )
}

export default Layout
