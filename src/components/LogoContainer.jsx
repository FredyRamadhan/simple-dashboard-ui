function LogoContainer({imgSrc, imgAlt}){
    return(
        <>
            <div className="flex p-1">
                <img className="w-16" src={imgSrc} alt={imgAlt} />
            </div>
        </>
    )
}

export default LogoContainer