import React from 'react'

function MainContent({ topMargin, leftMargin }) {
  return (
    <div
      className="main-content p-4"
      style={{
        marginTop: topMargin,
        marginLeft: leftMargin,
      }}
    >
      <h1>Main Content</h1>
      <p>This area has a dynamic top and left margin based on the Navbar and Sidebar dimensions.</p>
    </div>
  )
}

export default MainContent
