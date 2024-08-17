import { Link } from "react-router-dom";
import React from "react";
// import '../styles/index.css'
// import "primeicons/primeicons.css";
import logo from '../assets/images/logo.png';
import '../styles/style.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <div className="navbar-mod">
                    <img src={logo} alt="" style={{ height: '60px', width: '120px' }} />
                </div>
                <ul className="nav-li">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/home#event">Event</Link>
                    </li>
                    <li>
                        <Link to="/home#store">Store</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>
                    </li>
                </ul>

            </nav>

        </>
    );
};

export default Navbar;
