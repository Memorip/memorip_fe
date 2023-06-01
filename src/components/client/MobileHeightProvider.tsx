'use client'

import { useEffect } from 'react'

const MobileHeightProvider = () => {
  useEffect(() => {
    function setScreenSize() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      window.addEventListener('resize', setScreenSize)
    }

    setScreenSize()
  })

  return null
}

export default MobileHeightProvider