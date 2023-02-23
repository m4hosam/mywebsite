import ProjectCard from "./ProjectCard.jsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import img1 from '../assets/webScrap.png'
import img2 from '../assets/interactiveCommentSection1.png'
import img3 from '../assets/bankMangementSystem.png'

const data = {
    card1: {
        title: 'E-Commerce Website',
        projectType: 'MERN Full Stack',
        preview: 'https://webscrapingcimri.netlify.app/',
        github: 'https://github.com/m4hosam/Web-Scraping-E-Commerce',
        skills: ['React JS', 'Puppeteer', 'MongoDB', 'Node.js'],
        image: img1,
        description: ['Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.',
            'Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.',
            'Implemented an E‑Commerce website with admin section to add oand delete any product.'
        ]
    },
    card2: {
        title: 'Interactive Comment Section',
        projectType: 'Full Stack Node.JS',
        preview: 'https://interactivecomment.onrender.com/',
        github: 'https://github.com/m4hosam/interactive-comment-section',
        skills: ['EJS', 'Express', 'Mongoose', 'MongoDB', 'Node.js'],
        image: img2,
        description: ['Created a fully functional interactive comment section for user to add, reply, like or delete a comment',
            'Implemented a responsive design for Desktop or mobile use (User Friendly)'
        ]
    },
    card3: {
        title: 'Bank Management System ',
        projectType: 'Desktop Application',
        preview: 'https://github.com/m4hosam/bank-managment-system',
        github: 'https://github.com/m4hosam/bank-managment-system',
        skills: ['Python', 'PYQT', 'SQL'],
        image: img3,
        description: ['Created a fully functional bank management system consisting of Client, Clerk and Manager Interfaces with their related normalized database.',
            'Established a connection between client and clerks so the client can request opening account or deleting account. Manger can assign clients to certain clerks and manage the currency values.',
            'Implemented loan management system with interest calculator over the requested time of the loan (credit).'
        ]
    }
}



export default function Projects(props) {

    return (
        <Box sx={{
            my: 5
        }}>
            <ProjectCard flexDirection="row" right data={data.card1} />
            <ProjectCard flexDirection="row-reverse" data={data.card2} />
            <ProjectCard flexDirection="row" right data={data.card3} />
        </Box>
    );
}