import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import personalImg from '../assets/photoID.png'


function Span(props) {
    return (
        <span style={{ fontSize: '18px', color: "var(--green3)" }}>
            {props.text}
        </span>

    )
}



export default function About() {


    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-evenly', alignItems: 'center',
            mb: 10
        }} >

            <Box sx={{ width: { xs: '90%', md: '40%' } }}>
                <Typography sx={{ fontSize: '18px', mb: 1 }} color="var(--white3)">Hi, My name is Mohamed Hosam. I study Computer Engineering "3rd Year" at Kocaeli University in Turkey.
                    I am an experienced MERN Full-Stack Developer with a passion for tackling complex challenges in <Span text="desktop" />, <Span text="Android" />,and <Span text="web applications" />.
                </Typography>
                <Typography sx={{ fontSize: '18px', mb: 1 }} color="var(--white3)">Over the past 2 years, I have honed my skills and expertise in developing a range of software, from all different websites to mobile apps.
                    I take great pride in breaking down complex problems into smaller, more manageable pieces, and working my way up to finding the right solutions.</Typography>
                <Typography sx={{ fontSize: '18px', mb: { xs: 10, md: 0 } }} color="var(--white3)">My experience has given me exposure to several technologies, including <Span text="SQL" /> , <Span text="MongoDB" />, <Span text=".Net" />, <Span text="Node.js" />, <Span text="React" />,<Span text="HTTP requests" /> , and <Span text="web scraping" />.
                    My personal projects have also allowed me to grow to become an expert in problem-solving and algorithmic thinking.</Typography>
            </Box>


            <motion.div
                style={{ height: '320px', borderRadius: '7px' }}
                initial={{ opacity: '0', rotate: 320, scale: 0 }}
                animate={{ opacity: '0.7', rotate: 360, scale: 1 }}
                whileHover={{
                    scale: 1.05,
                    opacity: '1',
                    x: -10,
                    boxShadow: "10px 10px 10px rgba(105, 105,105, 0.3)",
                    transition: { duration: .5 },
                }}

                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >

                <img src={personalImg} alt='personalImg' style={{ width: '20rem', borderRadius: '7px' }} />
            </motion.div>

        </Box>

    )
}
