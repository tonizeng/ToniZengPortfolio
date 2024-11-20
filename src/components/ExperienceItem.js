// src/components/ExperienceItem.js
import React, { useState } from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ title, link, date, role, skills, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const descriptionLines = description.split('\n');

    return (
        <div className="experience-item">
            <div className="experience-item-header">
                <div className="experience-item-details">
                    <h2 className="experience-item-title">
                        {link ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="title-link">
                                {title}
                            </a>
                        ) : (
                            title
                        )}
                    </h2>
                    <div className="experience-item-date-role">
                        <div className="experience-item-role">{role}</div>
                        <div className="experience-item-date">{date}</div>
                    </div>
                </div>
                
                <button onClick={toggleOpen} className="experience-item-button">
                    {isOpen ? 'Close' : 'Open'}
                </button>
            </div>

            {isOpen && (
                <div className="experience-item-content">
                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">{skill}</li>
                        ))}
                    </ul>
                    <div className="experience-item-desc">
                        {descriptionLines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceItem;
