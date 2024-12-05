import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState(0)
  const navbarRef = useRef(null)
  const sidebarRef = useRef(null)


  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }

    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth)
    }
  }, [])

  return (
    <>
      <Sidebar ref={sidebarRef} topMargin={navbarHeight}/>
      <Navbar ref={navbarRef} />
      <MainContent topMargin={navbarHeight} leftMargin={sidebarWidth}/>
    </>
  )
}

export default App
