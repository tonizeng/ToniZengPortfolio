// src/components/Skills.js

import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = Array(200).fill('MY SKILLS'); 

    return (
        <div className="skills-animation-container">
            <div className="skills-animated-text">
                {skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
                {skills.map((skill, index) => (
                    <p key={`duplicate-${index}`}>{skill}</p>
                ))}
            </div>
        </div>
    );
};

export default Skills;
