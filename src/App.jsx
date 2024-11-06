import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0)
  const navbarRef = useRef(null)

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    };
  }, [])

  return (
    <>
      <Sidebar topMargin={navbarHeight}/>
      <Navbar ref={navbarRef} />
    </>
  )
}

export default App
