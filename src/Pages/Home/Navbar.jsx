import { useState, useEffect } from React
import {Link} from "react-scroll"

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    
    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 500) {
            closeMenu
        }
    }


    window.addEventListener("resize", handleResize);

    return() => {
        window.removeEventListener("resize", handleResize);p
    }
    })
}