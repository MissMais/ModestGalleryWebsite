import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/style.css';


const Footer = () => {

    return (
        <>
            <footer id="footer">
                <div className="footer">
                    <div className="footer-section">
                        <h1 id="mg">Modest Gallery</h1>
                    </div>

                    <div className="footer-section">
                        <h3 style={{ fontWeight: "bold" }}>Contact Us</h3>
                        <ul>
                            <li>
                                <Link to="https://chat.whatsapp.com/KRHfwgUq6iz33YU3XqUa7N"
                                    style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <FaWhatsapp /> Modest Hijab Store
                                </Link>
                            </li>
                            <li>
                                <FaEnvelope /> gallery@modest.co.in
                            </li>
                            <li>
                                <FaPhone /> +91-6260499281
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">

                        <h3 style={{ fontWeight: "bold" }}>
                            Registered Office Address
                        </h3>
                        <span>
                            Modest Gallery,
                            Shahjahanabad, Bhopal,
                        </span><br />
                        <span>
                            Madhya Pradesh, India
                        </span>
                        <p>
                            Pin code - 462001
                        </p>
                        
                    </div>
                </div>
               
                <div className="copyright">
                    <b>
                        <p style={{ textAlign: "center" }}>
                            © 2024 Modest Gallery. All Rights Reserved.
                        </p>
                    </b>
                </div>
            </footer>
        </>
    );
};

export default Footer;
