import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Header";
import ProjectCard from "./ProjectCard.jsx";

import nextEcommerce from '../assets/nextjs-ecommerce.png';
import lightingPlanner from '../assets/nextjs-lighting2.png';
import webScrap from '../assets/webScrap.png';
import interactiveCommentSection from '../assets/interactiveCommentSection.png';
import bankMangementSystem from '../assets/bankMangementSystem.png';
import HarryPotter from '../assets/HarryPotter.png';

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Website',
        projectType: 'NextJS Full Stack',
        preview: 'https://ecommerce-admin-m4hosam.vercel.app/',
        github: 'https://github.com/m4hosam/',
        skills: ['NextJS', 'TypeScript', 'MYSQL', 'TailwindCSS', 'Prisma'],
        image: nextEcommerce,
        description: ['Developed an efficient ecommerce website with NextJS, TypeScript, and MySQL, improving page load speed and SEO.',
            'Created a dynamic product page with advanced shopping cart features, enhancing user experience and interaction.',
            'Featuring iconic characters from the Harry Potter universe, the game offers a fun and engaging way to interact with the magical world of Hogwarts.Integrated NextAuth for secure user registration, login, and personalized account management including efficient checkout.',
            'Designed a comprehensive admin dashboard for order management, product updates, and insightful sales reporting.'
        ]
    },
    {
        id: 2,
        title: 'Intelligent Lighting Distribution Planner',
        projectType: 'NextJS Full Stack',
        preview: 'https://lighting-planner.vercel.app/',
        github: 'https://github.com/m4hosam/',
        skills: ['NextJS', 'TypeScript', 'MYSQL', 'TailwindCSS', 'Prisma'],
        image: lightingPlanner,
        description: ['Developed an interactive lighting planner software that enables room‑specific bulb distribution visualization based on user‑provided dimensions and room type selection',
            'Implemented a dynamic algorithm (Using React States) to instantly adjust bulb placement in the visual chart upon any change in room size, enhancing user experience through immediate feedback.',
            'Customized lighting solutions for various room types, including a specialized ring distribution for living rooms to accommodate central chandeliers, complete with luminary specifications such as bulb count and lumen requirements',
            'Integrated a feature for users to print the optimized lighting chart along with a detailed specifications table, demonstrating attention to user needs and practical functionality.'
        ]
    },
    {
        id: 3,
        title: 'E-Commerce Website',
        projectType: 'MERN Full Stack',
        preview: 'https://webscrapingcimri.netlify.app/',
        github: 'https://github.com/m4hosam/Web-Scraping-E-Commerce',
        skills: ['React JS', 'Puppeteer', 'MongoDB', 'Node.js'],
        image: webScrap,
        description: ['Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.',
            'Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.',
            'Implemented an E‑Commerce website with admin section to add oand delete any product.'
        ]
    },
    {
        id: 4,
        title: 'Interactive Comment Section',
        projectType: 'Full Stack Node.JS',
        preview: 'https://interactivecomment.onrender.com/',
        github: 'https://github.com/m4hosam/interactive-comment-section',
        skills: ['EJS', 'Express', 'Mongoose', 'MongoDB', 'Node.js'],
        image: interactiveCommentSection,
        description: ['Created a fully functional interactive comment section for user to add, reply, like or delete a comment',
            'Implemented a responsive design for Desktop or mobile use (User Friendly)'
        ]
    },
    {
        id: 5,
        title: 'Bank Management System ',
        projectType: 'Desktop Application',
        preview: 'https://github.com/m4hosam/bank-managment-system',
        github: 'https://github.com/m4hosam/bank-managment-system',
        skills: ['Python', 'PYQT', 'SQL'],
        image: bankMangementSystem,
        description: ['Created a fully functional bank management system consisting of Client, Clerk and Manager Interfaces with their related normalized database.',
            'Established a connection between client and clerks so the client can request opening account or deleting account. Manger can assign clients to certain clerks and manage the currency values.',
            'Implemented loan management system with interest calculator over the requested time of the loan (credit).'
        ]
    },
    {
        id: 6,
        title: 'Harry Potter Android Game',
        projectType: 'Android Application',
        preview: 'https://github.com/m4hosam/Harry-Potter-Android-Game',
        github: 'https://github.com/m4hosam/Harry-Potter-Android-Game',
        skills: ['Kotlin', 'Android Studio', 'FireBase'],
        image: HarryPotter,
        description: ['The Harry Potter themed card game allows players to test their memory skills by matching pairs of upside-down cards to earn points.',
            'With three different levels of difficulty, the game provides a range of challenges suitable for players of all skill levels.',
            'Featuring iconic characters from the Harry Potter universe, the game offers a fun and engaging way to interact with the magical world of Hogwarts.'
        ]
    }
];

export default function Projects(props) {
    return (
        <Box id="projects" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Header label="Projects" />
            {projectsData.map(project => (
                <ProjectCard key={project.id} flexDirection={project.id % 2 === 0 ? 'row-reverse' : 'row'} right={project.id % 2 === 0 ? false : true} data={project} />
            ))}
        </Box>
    );
}
