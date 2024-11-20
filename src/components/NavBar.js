// src/components/NavBar.js

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import logo from '../images/face.png';
import emailIcon from '../images/outlook.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import resumeIcon from '../images/pdf.png';
import resumePdf from '../documents/TZ2024.pdf';

const NavBar = ({ exploreMoreClicked }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [showSocialLinks, setShowSocialLinks] = useState(false);
    const [showPdfModal, setShowPdfModal] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleClick = (path) => {
        setActiveLink(path === '/' ? '' : path);
    };

    const toggleSocialLinks = () => {
        setShowSocialLinks((prev) => !prev);
    };

    const togglePdfModal = () => {
        setShowPdfModal((prev) => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="brand-name" onClick={() => handleClick('/')}>TZ.</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link
                        to="/about"
                        onClick={() => handleClick('/about')}
                        className={activeLink === '/about' ? 'active' : ''}
                    >
                        01 <FontAwesomeIcon 
                             icon={activeLink === '/about' || exploreMoreClicked ? solidStar : regularStar} 
                             className="nav-icon" 
                             style={{ color: (activeLink === '/about' || exploreMoreClicked) ? '#65796d' : 'inherit' }} 
                           /> ABOUT
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        onClick={() => handleClick('/projects')}
                        className={activeLink === '/projects' ? 'active' : ''}
                    >
                        02 <FontAwesomeIcon icon={activeLink === '/projects' ? solidStar : regularStar} className="nav-icon" /> PROJECTS
                    </Link>
                </li>
                <li>
                    <Link
                        to="/experience"
                        onClick={() => handleClick('/experience')}
                        className={activeLink === '/experience' ? 'active' : ''}
                    >
                        03 <FontAwesomeIcon icon={activeLink === '/experience' ? solidStar : regularStar} className="nav-icon" /> EXPERIENCE
                    </Link>
                </li>            
            </ul>
            <div className="navbar-right">
                <img src={logo} alt="Logo" className="logo" onClick={toggleSocialLinks} style={{ cursor: 'pointer' }} />

                {showSocialLinks && (
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/tonizeng/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                        </a>                        
                        <a href="https://github.com/tonizeng" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="mailto:tyzeng@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                            <img src={emailIcon} alt="Outlook" className="social-icon" />
                        </a>                    
                        <a href="#" onClick={togglePdfModal} className="social-icon">
                            <img src={resumeIcon} alt="Resume" /> 
                        </a>
                    </div>
                )}
            </div>

            {showPdfModal && (
                <div className="pdf-modal">
                    <div className="pdf-overlay" onClick={togglePdfModal}></div>
                    <div className="pdf-content">
                        <button onClick={togglePdfModal} className="close-btn">X</button>
                        <iframe src={resumePdf} width="700px" height="805px" title="Resume"></iframe>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
