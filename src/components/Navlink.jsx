function Navlink({linkText, linkHref}){
    return(
        <>
            <div className="mx-[2px] px-5 flex align-middle font-medium">
                <a target="_blank" className="p-0 m-0" href={linkHref}>{linkText}</a>
            </div>
        </>
    )
}

export default Navlink