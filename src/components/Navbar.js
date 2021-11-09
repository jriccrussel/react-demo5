import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {WOW} from 'wowjs'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const showMenu = () => setToggle(!toggle)

    useEffect(() => {
        const wow = new WOW({live: false})
        wow.init()
    }, [])

    return (
        <>
            <nav>
                <span id="brad">
                    <Link to="/" className="animate__animated animate__fadeInUp">jinn</Link>
                </span>

                <ul id="menu">
                    <li id="home" className="animate__animated animate__fadeInUp">
                        <Link to="/">home<span>.</span></Link>
                    </li>
                    <li id="work" className="animate__animated animate__fadeInUp">
                        <Link to="/work">work<span>.</span></Link>
                    </li>
                    <li id="about" className="animate__animated animate__fadeInUp">
                        <Link to="/about">about me<span>.</span></Link>
                    </li>
                    <li id="contact" className="animate__animated animate__fadeInUp">
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