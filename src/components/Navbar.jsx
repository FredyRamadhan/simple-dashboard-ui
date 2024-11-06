import React from 'react'
import Navlink from "./Navlink"
import LogoContainer from "./LogoContainer"
import imgLink from "../assets/GRNDr.png"

const Navbar = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="p-3 bg-white z-10 fixed top-0 left-0 right-0">
            <div className="flex px-6 py-4 align-middle justify-between">
                <div className="flex px-4">
                    <LogoContainer imgSrc={imgLink} imgAlt={"logo"} />
                </div>
                <div className="flex px-4">
                    <Navlink linkHref={"#"} linkText={"home"} />
                    <Navlink linkHref={"#"} linkText={"about"} />
                    <Navlink linkHref={"#"} linkText={"portfolio"} />
                    <Navlink linkHref={"#"} linkText={"contact"} />
                </div>
            </div>
        </div>
    )
})

export default Navbar
