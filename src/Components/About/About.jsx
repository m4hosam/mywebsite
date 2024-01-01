import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import personalImg from '../assets/photoID.png'


function Span(props) {
    return (
        <span style={{ fontSize: '17px', color: "var(--green3)" }}>
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
                <Typography sx={{ fontFamily: 'inherit', fontSize: '17px', mb: 1 }} color="var(--white3)">
                    Hi, I'm Mohamed Hosam, a passionate Software Engineer with a
                    focus on Python and Javascript development. Currently,
                    I am leveraging the power of AI with tools like ChatGPT
                    and Github Copilot to code at lightning speed.
                </Typography>
                <Typography sx={{ fontFamily: 'inherit', fontSize: '17px', mb: 1 }} color="var(--white3)">
                    My diverse experience has exposed me to a wide array of technologies,
                    ranging from <Span text="NextJS" /> , <Span text="TypeScript" />,
                    <Span text="React" />, <Span text="Node.js" /> ,<Span text="SQL" /> ,<Span text="MongoDB" /> ,
                    <Span text="TailwindCSS" />, to <Span text="Machine Learning" />. Through my personal projects,
                    I have gained my expertise in problem-solving and algorithmic thinking.
                </Typography>

                <Typography sx={{ fontFamily: 'inherit', fontSize: '17px', mb: 1 }} color="var(--white3)">
                    Over the past 2 years, I have honed my skills and expertise in
                    developing a range of software, from all different websites to mobile apps.
                    I take great pride in breaking down complex problems into smaller,
                    more manageable pieces, and working my way up to finding the right solutions.
                </Typography>

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
