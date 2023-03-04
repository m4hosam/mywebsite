import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TagSphere from "./TagSphere"
import { motion } from "framer-motion"





export default function Bio() {


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
                <Typography variant="h5" color="var(--white3)">Hi, I'm</Typography>
                <Typography variant="h4" color="var(--white1)">Mohamed Hosam</Typography>
                <Typography variant="h5" color="var(--white2)">I create websites and applications</Typography>
                <Typography variant="h8" color="var(--white3)">Experienced MERN Full-Stack Developer with over 2 years of hands-on experience in developing desktop apps, Android apps, and websites. Passionate about problem-solving and algorithmic challenges.</Typography>
            </Box>

        </Box >

    )
}
