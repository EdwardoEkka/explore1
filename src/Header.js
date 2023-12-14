import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((prevState) => !prevState);
    };


    return (
        <header className="header">
            <div className="header__content">
                <nav
                    className={`header__content__nav ${menuOpen && size.width < 768 ? "isMenu" : ""
                        }`}
                >
                    <ul className="navbar-list">
                        <li className="navbar-item">
                        <Link to="/happyPage" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/culture" className="navbar-link">Culture</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/destinations" className="navbar-link">Destinations</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/food" className="navbar-link">Food</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/history" className="navbar-link">History</Link>
                        </li>


                        {/* Add more navbar items as needed */}
                    </ul>
                </nav>
                <div className="header__content__toggle">
                    {!menuOpen ? (
                        // Use a simple text symbol as the menu toggle
                        <div onClick={menuToggleHandler}>☰</div>
                    ) : (
                        <div onClick={menuToggleHandler}>✕</div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
