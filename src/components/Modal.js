// src/components/Modal.js

import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ isOpen, onClose, title, description, skills = [], video, image1, image2, extraDescription, githubLink }) => {
    const [isViewingVideo, setIsViewingVideo] = useState(!!video); // toggle between video and images

    if (!isOpen) return null;

    const toggleView = () => {
        if (video) {
            setIsViewingVideo((prev) => !prev);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}> ✖ </button>

                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="modal-icon-link"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>

                <p className="modal-description">{description}</p>
                <hr className="modal-divider" />

                <ul className="modal-skills">
                    {skills.map((skill, index) => (
                        <li key={index} className="modal-skill-item">
                            {skill}
                        </li>
                    ))}
                </ul>

                {/* Toggleable Content */}
                {isViewingVideo && video ? (
                    <div className="modal-video-container">
                        <video className="modal-video" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>                    
                ) : (
                    <div className="modal-images-container">
                        <img src={image1} alt="Project Image" className="modal-image" />
                        <img src={image2} alt="Project Image" className="modal-image" />
                    </div>
                )}

                {/* Toggle Button */}
                {video && (
                    <button className="toggle-view-button" onClick={toggleView}>
                        {isViewingVideo ? "View Images" : "View Demo"}
                    </button>
                )}

                <hr className="modal-divider" />
                <p className="modal-extra-description">{extraDescription}</p>
                <hr className="modal-divider" />
            </div>
        </div>
    );
};

export default Modal;
