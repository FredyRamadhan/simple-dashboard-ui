import React from 'react'

function Sidebar({ topMargin }) {
    const margin = topMargin + 8;
    return (
        <div
            className="fixed left-0 top-0 bottom-0 w-32 bg-pink-300 z-0"
            style={{ marginTop: margin }}
        >
            tes
        </div>
    )
}

export default Sidebar
