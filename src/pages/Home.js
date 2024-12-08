// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/mode1.png';
import image2 from '../images/mode2.png';
import image3 from '../images/mode3.png';

const Home = ({ onExploreMoreClick }) => {
    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className = "body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-start', width: '100%' }}>
            <img
                src={images[currentImageIndex]}
                alt="Slideshow"
                style={{ width: '550px', paddingLeft: '10px', paddingTop: '50px', objectFit: 'cover' }}
            />
            <h2 style={{ marginTop: '18px', fontStyle: 'italic', fontSize: '35px' }}>Hi, I'm Toni,</h2>
            <h1 style={{ fontSize: '20px', fontStyle: 'italic' }}>an aspiring software engineer.</h1>
            <Link to="/about">
                <button
                    onClick={onExploreMoreClick}
                    onMouseEnter={(e) => {
                        e.target.style.fontStyle = 'italic';
                        e.target.style.color = 'rgb(98, 88, 88)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'rgb(98, 88, 88)';
                    }}
                    style={{
                        marginTop: '10px',
                        padding: '4px 18px',
                        fontSize: '20px',
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: '700',
                        color: 'rgb(98, 88, 88)',
                        backgroundColor: 'transparent',
                        border: '2.5px solid rgb(98, 88, 88)',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        transition: 'background-color 0.1s ease, color 0.1s ease', 
                    }}
                >
                    welcome to my digital workspace
                </button>
            </Link>
        </div>
    );
};

export default Home;
