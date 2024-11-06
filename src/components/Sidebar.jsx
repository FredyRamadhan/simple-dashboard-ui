import React from 'react'
import SidebarLinks from './SidebarLinks';

function Sidebar({ topMargin }) {
    return (
        <div className="fixed left-0 top-0 bottom-0 bg-teal-200 z-0 flex flex-col gap-4 py-4 px-2" style={{ marginTop: topMargin }}>
            <div className="flex flex-col gap-4 p-2">
                <SidebarLinks linkHref={"#"} linkText={"Playlist 1"}/>
                <SidebarLinks linkHref={"#"} linkText={"Playlist 2"}/>
                <SidebarLinks linkHref={"#"} linkText={"Playlist 3"}/>
                <SidebarLinks linkHref={"#"} linkText={"Playlist 4"}/>
            </div>
        </div>
    )
}

export default Sidebar
