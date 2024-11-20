// src/pages/Projects.js

import React from 'react';
import ImageTile from '../components/ImageTile';

import image1 from '../images/spotSpot.png';
import image2 from '../images/mpb.png';
import image3 from '../images/jirabot.png';
import image4 from '../images/aircast.png';
import image5 from '../images/hbcover.png';
import image6 from '../images/face.png';

import eg1 from '../images/eg1.png';
import eg2 from '../images/eg2.png';
import eg3 from '../images/eg3.jpg';
import eg4 from '../images/eg4.JPG';
import eg5 from '../images/eg5.png';
import eg6 from '../images/eg6.png';
import eg7 from '../images/eg7.png';

import video1 from '../videos/spotspotdemo.mp4';
import video2 from '../videos/mpbdemo.mp4';
import video3 from '../videos/aircastdemo.mp4';

const Projects = () => {
    const imagesArray = [image1, image1];
    return (
        <div style={{ width: '100%' }}>
            <h3 style={{ borderBottom: '2px solid rgb(98, 88, 88)' }}>My Projects</h3>
            <div style={{ paddingTop: '30px' }} className="grid-display">
                <ImageTile
                    image={image1}
                    altText="Image 1"
                    title="✧ your personal skin care assistant"
                    overlayText=" NO. 0 — spotSpot"
                    modalData={{
                        title: "spotSpot",
                        description: "Skip the lines. Analyze your skin condition in a snap.",
                        skills: ["Python", "PyTorch", "scikit-learn", "Streamlit", "CSS"],
                        image1: image1,
                        image2: eg1,
                        video: video1,
                        extraDescription: "spotSpot is an acne detection classifier designed to identify your acne type with the click of a button. It provides tailored treatment options and guidance, eliminating the need to wait in long physician lines or seek referrals—especially critical amidst the growing shortage of doctors. This project was built at CtrlHackDel 2024 @ York University.",
                        githubLink: "https://github.com/tonizeng/spotSpot",
                    }}
                />
                <ImageTile 
                    image={image2} 
                    altText="Image 2" 
                    title="✧ plan & explore new meal ideas" 
                    overlayText=" NO. 1 — meal plan buddy" 
                    modalData={{
                        title: "MealPlanBuddy",
                        description: "Having trouble with meal planning in university? Try this.",
                        skills: ["Python", "Flask", "SQLite", "JavaScript", "HTML", "CSS", "Spoonacular API"],
                        image1: image2,
                        image2: eg2,
                        video: video2,
                        extraDescription: "MealPlanBuddy is an application designed to help university students transition into independent living by simplifying meal planning. Once students move out, the challenge of managing meals without the convenience of parents cooking can feel overwhelming. MealPlanBuddy allows users to create personalized accounts, save weekly meal plans, and discover recipe ideas using the Spoonacular API, making it easier to stay organized, eat healthy, and save time in their busy schedules.",
                        githubLink: "https://github.com/tonizeng/MealPlanBuddy",
                    }}
                />
                <ImageTile 
                    image={image3} 
                    altText="Image 3" 
                    title="✧ simplify your ticket resolution process" 
                    overlayText=" NO. 2 — 'jiraxis' jira bot" 
                    modalData={{
                        title: "'Jiraxis' Jira Bot",
                        description: "Stuck on another ticket? Talk to Jiraxis — your designated company chatbot.",
                        skills: ["OpenAI", "Python", "JavaScript", "Node.js", "ChromaDB", "Docker"],
                        image1: eg3,
                        image2: eg4,
                        extraDescription: "Jiraxis is a tool designed to assist developers with real-time bug resolution by searching Jira's ticket database. It recommends potential resources to help find the right solution. If no relevant solution is available, the bot escalates the issue to a dedicated developer channel, where experts provide solutions that the AI incorporates into its learning for future problem-solving. This project was built for Kinaxis Hackathon 2024. For company data privacy reasons, there is no GitHub repository available for this project.",
                        githubLink: "",
                    }}                    
                    />
                <ImageTile 
                    image={image4} 
                    altText="Image 4" 
                    title="✧ portable air quality monitor" 
                    overlayText=" NO. 3 — aircast" 
                    modalData={{
                        title: "aircast",
                        description: "Keep your family safe by checking the air quality before heading outdoors.",
                        skills: ["Arduino", "Python", "C++", "SolidWorks", "3D Printing"],
                        video: video3,
                        image1: eg5,
                        image2: eg6,
                        extraDescription: "AirCast is a portable device built with an Arduino Uno and sensors to monitor outdoor air quality and temperature, designed to reduce exposure to unsafe air conditions. Originally inspired by the need to monitor air quality following the BC forest fires, AirCast helps users assess outdoor safety in real-time. The Arduino program processes sensor outputs and offers two options: displaying data directly on the device or transmitting it via USB to a Python script. The Python script then visualizes the data in real-time with interactive plots on a connected device.",
                        githubLink: "https://github.com/tonizeng/AirCast",
                    }}                           
                    />
                <ImageTile 
                    image={image5} 
                    altText="Image 5" 
                    title="✧ generate personalized gym playlists that match your heart rate" 
                    overlayText=" NO. 4 — heartbeatz" 
                    modalData={{
                        title: "heartbeatz",
                        description: "Looking for a boost during your cardio routine? Use this to create a playlist that matches your heartbeat!",
                        skills: ["Python", "pandas", "NumPy", "matplotlib", "scikit-learn", "Jupyter Notebook", "Spotify API"],
                        image1: image5,
                        image2: image5,
                        extraDescription: "STREAMLIT UI COMING SOON! HeartBeatz is an application (currently an algorithm) designed to elevate workouts by syncing music beats per minute (BPM) with the user's heart rate. It takes inputs like a user's Spotify playlist, favorite artists, and average heart rate to create a curated selection of songs that match both their musical preferences and their workout intensity. Inspired by research showing the benefits of aligning heart rate with music BPM, HeartBeatz aims to supercharge exercise sessions with perfectly paced tunes.",
                        githubLink: "https://github.com/tonizeng/HeartbeatzPlaylistComposer",    
                    }}                
                    />
                {/* <ImageTile image={image6} altText="Image 6" title="✧ stay tuned for updates!" overlayText=" NO. 5" />  */}
            </div>
            <div style={{ height: '50px' }}></div>
        </div>
    );
};

export default Projects;