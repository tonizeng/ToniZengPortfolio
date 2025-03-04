// src/pages/Experience.js

import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
    const experiences = [
        {
            title: 'Shopify',
            link: 'https://www.shopify.com/ca',
            date: '(Incoming) May 2025 – Aug 2025',
            role: 'Software Engineering Intern',
            skills: [],
            description: ``            
        },
        {
            title: 'Kinaxis',
            link: 'https://www.kinaxis.com/en',
            date: 'Sept 2024 – Dec 2024',
            role: 'DevOps Developer | Team: Backend Apps & Tools',
            skills: ['C#', '.NET', 'DataDog', 'Artifactory', 'Logstash', 'OOP', 'Jenkins', 'Kubernetes'],
            description: `Kinaxis provides innovative supply chain management solutions, leveraging AI-driven analytics to help organizations streamline their planning and operational process.
            ✦ Refined Dockerized applications and Helm charts to align with logging and containerization best practices, enhancing consistency and reducing errors for Kubernetes deployments by 20%. 
            ✦ Delivered 15 critical fixes to C# .NET applications, improving performance and security by implementing monthly service upgrades, optimizing error handling mechanisms, and enhancing logging frameworks for better traceability. 
            ✦ Developed Datadog dashboards to track and visualize real-time updates from Salesforce for 65 virtual machines.
            ✦ Streamlined logging pipelines for logs sent to Datadog by refining Logstash parsing, reducing processing time by 25%.
            ✦ Managed Artifactory build artifacts to support reliable cross-environment testing.`            
        },
        {
            title: 'Social and Intelligent Robotics Research Lab',
            link: 'https://uwaterloo.ca/social-intelligent-robotics-research-lab/',  
            date: 'May 2024 – Aug 2024',
            role: 'Machine Learning Developer | Project: Social Robots to Support Healthy Aging & Living',
            skills: ['Python', 'OpenCV', 'PyTorch', 'Mask R-CNN'],
            description: `SIRRL develops robots with cognitive and social abilities to enhance human-robot interaction in fields like healthcare and education.
            ✦ Led user studies with 60 participants to assess computer vision models for a robotic arm.
            ✦ Trained a Mask R-CNN model on 50,000+ images with OpenCV and PyTorch, achieving 90% accuracy in image anonymization.
            ✦ Optimized Mask R-CNN for object detection, improving segmentation accuracy by 30%.`
        },
        {
            title: 'Royal Bank of Canada',
            link: 'https://www.rbc.com/about-rbc.html',  
            date: 'Jan 2024 – Apr 2024',
            role: 'DevOps Engineering Intern | Team: Online Banking Pipeline',
            skills: ['Java', 'Jenkins', 'Docker', 'React', 'JavaScript', 'Git'],
            description: `RBC offers a range of financial services, including personal and commercial banking, wealth management, and capital marks solutions across the globe.
            ✦ Built Java-based code validation pipelines in Jenkins and Docker, reducing errors by 91%.
            ✦ Optimized deployment pipelines, cutting deployment time by 35%.            
            ✦ Deployed DevOps infrastructure on UNIX for 30+ Mac Minis, supporting mobile deployments.
            ✦ Developed a React-based developer portal with API, centralizing resources for 90+ employees.
            ✦ Created GitHub tools using API integration with Jenkins to enforce branch protection. `
        },
        {
            title: 'Metrolinx',
            link: 'https://www.metrolinx.com/en', 
            date: 'May 2023 – Aug 2023',
            role: 'Data Automation Engineering Intern | Team: Capital Projects Group Reporting',
            skills: ['Python', 'Pandas', 'Data ETL', 'Azure DevOps', 'MySQL', 'Power BI'],
            description: `Metrolinx is Ontario's public transportation agency, focusing on improving and expanding regional transit to enhance mobility across the GTA and Hamilton Area.
            ✦ Implemented Python scripts for automated file validation, boosting ETL efficiency by 98%.
            ✦ Processed 10,000 transit records with Python, Pandas, and NumPy for trend analysis.
            ✦ Built optimized SQL queries for data extraction on 10+ Power BI dashboards.
            ✦ Integrated Azure DevOps for GitHub deployment with CI/CD pipelines.
            ✦ Developed document management apps with MySQL and Power Apps interfaces.`
        }
    ];

    return (
        <div style={{ width: '100%'}}>
            <h3 style={{ textAlign: 'center'}}> —My Experience—</h3>

            {experiences.map((experience, index) => (
                <ExperienceItem
                    key={index}
                    title={experience.title}
                    link={experience.link}
                    date={experience.date}
                    role={experience.role}
                    skills={experience.skills}
                    description={experience.description}
                />
            ))}
             <div style={{ height: '50px' }}></div>
        </div>
    );
};

export default Experience;
