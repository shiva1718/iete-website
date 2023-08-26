import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div>
                        <NavLink exact to="/" className="nav-logo">

                            <img className="logo" src="data:image/jpeg;base64,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" ></img>
                        </NavLink>
                        <h1>IETE</h1>
                        <h6>The Institution of Electronics and Telecommunication Engineers, Chennai</h6>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/committee"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Committee
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/events"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/membership"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Membership
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;