// src/components/ImageTile.js

import React, { useState } from 'react';
import { MdLaunch } from "react-icons/md";
import Modal from './Modal';
import './ImageTile.css';

const ImageTile = ({ image, altText, title, overlayText, modalData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="image-tile-container">
            <div className="image-tile-title">{overlayText}</div>
            <div className="image-tile">
                <img src={image} alt={altText} className="image-tile-img" />
                <MdLaunch className="image-tile-icon" onClick={handleOpenModal} />
            </div>
            <div className="image-tile-desc">{title}</div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} {...modalData} />
        </div>
    );
};

export default ImageTile;
