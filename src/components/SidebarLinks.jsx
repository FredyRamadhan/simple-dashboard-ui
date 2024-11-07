function SidebarLinks({linkText, linkHref}){
    return(
        <>
            <div className="mx-[2px] px-8 flex align-middle font-medium">
                <a target="_blank" className="p-0 m-0" href={linkHref}>{linkText}</a>
            </div>
        </>
    )
}

export default SidebarLinks