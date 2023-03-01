import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TagSphere from "./TagSphere"
import { COLORS } from '../Colors';
import { motion } from "framer-motion"





export default function Bio() {


    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', height: '80vh', alignItems: 'center', marginBottom: '20rem' }} >
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
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                <Typography variant="h5" color={COLORS.white2}>Hi, I'm</Typography>
                <Typography variant="h3" color={COLORS.white}>Mohamed Hosam</Typography>
                <Typography variant="h5" color={COLORS.white}>Software Engineer</Typography>
                <Typography variant="h9" color={COLORS.white2}>I study Computer Engineering "3rd Year" at Kocaeli University in Turkey. In the Past 3 years i have made a lot of projects in Software and Web development fields. I have created 2 big projects that deal with database (SQL, MongoDB). One of them is interactive comment section the other one is bank management system. You can see my projects in the project section.</Typography>
                {/* <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                        <h1 className="text-2xl font-bold text-white">Mohamed Hosam</h1>
                        <p class="text-xl font-bold text-gray-300">Software Engineer</p>
                        <p className="text-md font-light text-gray-400 ">I study Computer Engineering "3rd Year" at Kocaeli University in Turkey. In the Past 3 years i have made a lot of projects in Software and Web development fields. I have created 2 big projects that deal with database (SQL, MongoDB). One of them is interactive comment section the other one is bank management system. You can see my projects in the project section.</p> */}
            </Box>

        </Box>

    )
}
