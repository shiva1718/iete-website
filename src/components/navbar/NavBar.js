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
                <div className={'logo-container'}>
                    <NavLink exact to="/" className="nav-logo">
                        <img className="logo"
                             src="http://www.ietechennai.in/assets/img/logo.png"
                             alt={"IETE Logo"}></img>
                    </NavLink>
                    <h1 className={"IETE-society-title"}>IETE</h1>
                    <h6 className={"IETE-society-caption"}>The Institution of Electronics and Telecommunication Engineers, Chennai</h6>
                </div>
                <div className="nav-container">
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