import { useEffect, useState, useCallback } from 'react'

const useScroll = () => {
  // check current Y position
  const [isBelowPosition, setIsBelowPosition] = useState(false)

  const checkScrollYPosition = (position: number) => {
    window.scrollY < position
      ? setIsBelowPosition(false)
      : setIsBelowPosition(true)
  }

  // check scroll direction
  const [isShow, setIsShow] = useState<boolean>(true)
  const [scrollYPosition, setScrollYPosition] = useState<number>(0)

  const scrollDownHideUpShow = () => {
    const scrollEventHandler = useCallback(() => {
      // Store current scrollY position
      setScrollYPosition(window.pageYOffset)

      // Show hamburger icon when scroll up
      // Hide hamburger icon when scroll down
      window.scrollY < scrollYPosition ? setIsShow(false) : setIsShow(true)
    }, [scrollYPosition])

    useEffect(() => {
      window.addEventListener('scroll', scrollEventHandler)
      return () => window.removeEventListener('scroll', scrollEventHandler)
    }, [scrollEventHandler])

    return { isShow }
  }

  return {
    isBelowPosition,
    checkScrollYPosition,
    isShow,
    setIsShow,
    scrollDownHideUpShow,
  }
}

export default useScroll
