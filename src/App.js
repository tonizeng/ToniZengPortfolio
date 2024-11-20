// src/App.js

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
    const [exploreMoreClicked, setExploreMoreClicked] = useState(false);

    const handleExploreMoreClick = () => {
        setExploreMoreClicked(true);
    };
    
    const resetExploreMoreClick = () => {
        setExploreMoreClicked(false);
    };

    return (
        <Router>
            <div style={{ padding: '100px', height: '100vh' }}>
                <NavBar exploreMoreClicked={exploreMoreClicked} resetExploreMoreClick={resetExploreMoreClick} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

