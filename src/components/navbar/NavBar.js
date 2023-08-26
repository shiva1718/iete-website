import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Links from '../Links';

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
                        {Links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    exact
                                    to={link.link}
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
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