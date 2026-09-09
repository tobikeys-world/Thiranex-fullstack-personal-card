import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return (
        <nav className="portfolio-navbar">
            <div className="navbar-brand">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
                <span className="navbar-brand-name">Oluwatobi Emmanuel</span>
            </div>

            <ul className="navbar-links">
                {navLinks.map((link) => (
                    <li key={link} className="nav-item">
                        {/* Changed from <button> to <a> */}
                        <a
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setActiveLink(link)}
                            className={`nav-link-btn ${activeLink === link ? 'active' : ''}`}
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="navbar-cta">
                <a href="#contact" className="hire-me-btn" style={{ textDecoration: 'none' }}>
                    <Sun size={18} className="btn-icon" />
                    <span>Hire Me</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
