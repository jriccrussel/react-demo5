import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const showMenu = () => setToggle(!toggle)

    return (
        <>
            <nav>
                <span id="brad">
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