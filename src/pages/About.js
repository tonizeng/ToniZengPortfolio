// src/pages/About.js

import React, { useState } from 'react';
import aboutImage from '../images/pfp.jpg'; 
import Skills from '../components/Skills';

const About = () => {
    const categories = [
        "All",
        "Languages",
        "Development Tools",
        "Frameworks & Libraries",
        "Databases/OS"
    ];
    
    const skills = [
        // Languages
        { name: "Java", category: "Languages" },
        { name: "Python", category: "Languages" },
        { name: "C++", category: "Languages" },
        { name: "C#", category: "Languages" },
        { name: "SQL", category: "Languages" },
        { name: "JavaScript", category: "Languages" },
        { name: "HTML/CSS", category: "Languages" },
    
        // Development Tools
        { name: "Git", category: "Development Tools" },
        { name: "Jenkins", category: "Development Tools" },
        { name: "Docker", category: "Development Tools" },
        { name: "Kubernetes", category: "Development Tools" },
        { name: "Datadog", category: "Development Tools" },
        { name: "Logstash", category: "Development Tools" },
        { name: "Artifactory", category: "Development Tools" },
        { name: "Azure DevOps", category: "Development Tools" },
        { name: "Power BI", category: "Development Tools" },
    
        // Frameworks & Libraries
        { name: ".NET", category: "Frameworks & Libraries" },
        { name: "React", category: "Frameworks & Libraries" },
        { name: "scikit-learn", category: "Frameworks & Libraries" },
        { name: "PyTorch", category: "Frameworks & Libraries" },
        { name: "OpenCV", category: "Frameworks & Libraries" },
        { name: "Pandas", category: "Frameworks & Libraries" },
        { name: "NumPy", category: "Frameworks & Libraries" },
    
        // Databases/OS
        { name: "MySQL", category: "Databases/OS" },
        { name: "SQLite", category: "Databases/OS" },
        { name: "ChromaDB", category: "Databases/OS" },
        { name: "UNIX", category: "Databases/OS" },
        { name: "Mainframe", category: "Databases/OS" },
        { name: "z/OS", category: "Databases/OS" }
    ];
    
    
    const [selectedCategory, setSelectedCategory] = useState("All"); 

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <div style={{ marginTop: '30px' }}>
            <div className="about-container">
                <div>
                    <img src={aboutImage} alt="About Me" />
                </div>
                <div>
                    <h3
                        style={{
                            textAlign: 'left',
                            fontFamily: 'BespokeSerif',
                            fontWeight: '700',
                            fontSize: '60px',
                            color: 'rgb(98, 88, 88)',
                        }}
                    >
                        <em>A Little Bit</em> About <em>Me</em>
                    </h3>
                    <p>
                    Hi, I'm Toni, and I'm currently studying Mechatronics Engineering at the University of Waterloo. I'm an aspiring software engineer, 
                    passionate about developing and designing innovative solutions that can improve daily lives. I enjoy exploring the intersection of 
                    technology and creativity, and I'm always eager to learn and grow wherever I go. 
                    </p>
                    <br></br>
                    <p>
                    — Whether working on personal projects or collaborating with a team, I <em>strive</em> to make a <em>meaningful difference</em> through my work and designs.
                    </p>
                </div>
            </div>

            <div><Skills/></div>
            <h3 style={{fontSize:'35px', textAlign:'center', marginBottom:'20px'}}>My Technical Toolbox 🛠️</h3>

            <div className="filter-buttons">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`filter-button ${
                            selectedCategory === category ? "active" : ""
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="skills-grid">
                {filteredSkills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        {skill.name}
                    </div>
                ))}
            </div>

            <div><Skills/></div>

            <div className="favourites-container">
                <h3 style={{fontSize:'40px', textAlign:'left', marginTop:'0'}}>★ My Current <em>Favourites</em></h3>
                <h1 style={{fontSize:'25px', fontStyle:'italic', marginBottom: '15px'}}>When I'm not studying or working...</h1>
                <div className="favourites">
                    <div className="favourite-category"><strong>Artists:</strong> The Rose, Lorde, Lana Del Rey, Role Model, Coldplay</div>
                    <div className="favourite-category"><strong>Foods:</strong> Sushi, Ramen, Takoyaki</div>
                    <div className="favourite-category"><strong>TV Shows:</strong> The Rookie, Criminal Minds, Superstore, Crash Landing on You, Doom at Your Service</div>
                    <div className="favourite-category"><strong>Sports:</strong> Tennis, Badminton, Ping Pong (Yes... All Racket Sports)</div>
                    <div className="favourite-category"><strong>Hobbies:</strong> Finding New Cafes, Trying New Foods, Painting, Reading</div>
                </div>
            </div>

            <div style={{ height: '50px' }}></div>
        </div>
        
    );
};

export default About;
