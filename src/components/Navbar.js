import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {WOW} from 'wowjs'
import gsap from 'gsap'

const tl = gsap.timeline()

const Navbar = () => {
    const logo = useRef(null)
    const [toggle, setToggle] = useState(false)

    const showMenu = () => setToggle(!toggle)

    useEffect(() => {
        tl.from(logo.current, 1, {
            delay: 0.4,
            y: 10,
            opacity: 0,
            ease: "expo.easeInOut"
        }, 0.1)

        tl.staggerFrom("#menu li a", 1, {
            delay: 0.4,
            opacity: 0,
            ease: "expo.easeInOut"
        }, 0.1)
        
    }, [])

    return (
        <>
            <nav>
                <span id="brad" ref={logo}>
                    <Link to="/">jinn</Link>
                </span>

                <ul id="menu">
                    <li>
                        <Link to="/">home<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="/work">work<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="/about">about me<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="/contact">contact<span>.</span></Link>
                    </li>
                </ul>

                <div id="toggle">
                    <div className="span" onClick={showMenu}>menu</div>
                </div>
            </nav>

            <div className={toggle ? "resize active" : "resize"}>
                <div className="close-btn" onClick={showMenu}>close</div>

                <ul id="menu">
                    <li>
                        <Link to="/">home<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="/work">work<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="/about">about me<span>.</span></Link>
                    </li>
                    <li>
                        <Link to="/contact">contact<span>.</span></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar