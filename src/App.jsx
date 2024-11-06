import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0)
  const navbarRef = useRef(null)

  useEffect(() => {
    // Set navbar height after the component mounts
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight)
    }
  }, [])

  return (
    <>
      <Sidebar topMargin={navbarHeight} />
      <div style={{ flex: 1 }}>
        {/* Pass navbarRef as ref using React.forwardRef in Navbar */}
        <Navbar ref={navbarRef} />
        <div>Main Content</div>
      </div>
    </>
  )
}

export default App
