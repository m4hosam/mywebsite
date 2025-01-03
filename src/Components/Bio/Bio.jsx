import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TagSphere from "./TagSphere"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

function Header(props) {
    return (
        <Typography sx={{
            fontSize: { xs: '35px', sm: '40px', md: '40px', lg: '40px' },
            background: "-webkit-linear-gradient(45deg, #11999e 30%, #cbf3f0 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(props.text)
                        .pauseFor(2500)
                        .start()
                }}
                options={{
                    autoStart: true,
                    loop: false,
                }}
            />
        </Typography>

    )
}



export default function Bio() {
    const bio = `Experienced Full-Stack Developer with over 2 years
                of hands-on project experience in developing Desktop, Android and Web apps.
                Passionate about problem-solving and algorithmic challenges.`


    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around', alignItems: 'center'

        }}>
            <motion.div
                initial={{ rotate: 320, scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: .5 },
                }}

                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >

                <TagSphere />
            </motion.div>
            <Box sx={{ width: { xs: '90%', md: '40%' }, mt: { xs: 7, md: 0 } }} >
                <Typography variant="h5" color="var(--green3)">Hi, I'm</Typography>
                <Header text="Mohamed Hosam" />
                <Typography sx={{ marginBottom: '1rem', fontSize: { xs: "18px", lg: '21px' } }} variant="h5" color="var(--green1)">Full Stack | Software Engineer</Typography>
                <Typography variant="h8" color="var(--white3)">{bio}</Typography>
            </Box>

        </Box >

    )
}
