import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Links from '../Links';


const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <p className="footer-links">
                    <h4><b>Useful Links</b></h4>
                    {
                        Links.map((x) => (
                            <Link to={x.link} className="link-1">{x.title}</Link>
                        ))
                    }
                </p>
                <p className="footer-company-name"> © Copyright {new Date().getFullYear()+"  "} <b>IETE Chennai.</b> All Rights Reserved</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>IETE Chennai centre, No: 37, Tamil Nadu 600086</span></p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>044 2835 0773</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:ietechennai@gmail.com">ietechennai@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>IETE Chennai</span>
                    "Innovation for the people and by the people is the reaction of our new India" - Narendra Modi
                </p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/iete-newdelhi/"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
