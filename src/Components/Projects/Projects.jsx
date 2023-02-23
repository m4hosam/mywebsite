import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion/dist/framer-motion";
import webscrap from '../assets/webScrap.png'
import Chip from '@mui/material/Chip';
import { COLORS } from '../Colors';
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import './styles.css'

function Skill(props) {
    return (
        <Chip label={props.label} sx={{
            color: COLORS.white,
            bgcolor: COLORS.black5, mr: 1
        }} />

    )
}



export default function RecipeReviewCard(props) {
    const smallScreen = useMediaQuery("(max-width: 900px)");
    const rightImage = props.right
    const xDim = !rightImage ? 20 : -20

    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: props.flexDirection },
            p: 1, my: 5, justifyContent: 'center'
        }}>
            {/* Text Card Details Section */}
            <Box sx={{
                bgcolor: COLORS.black2, width: { xs: '85%', md: '50%' },
                mx: { xs: 0, md: 5 }, px: 4, pt: 4, pb: 2, borderRadius: '10px',
                position: 'relative'
            }}>
                {/* On small screen show transparent Image background */}
                {smallScreen ?
                    <a href='https://webscrapingcimri.netlify.app/'>
                        <img src={webscrap} alt="projectImage" className='projectImage' />
                    </a>
                    : null}

                <Typography variant="h7" color={COLORS.white2}>MERN FULL STACK</Typography>
                <Typography variant="h5" color={COLORS.white}>E‑Commerce Website</Typography>
                <a href='https://webscrapingcimri.netlify.app/'>
                    <FaRegShareSquare color='white' style={{ fontSize: '20px', position: 'absolute', right: 40, top: 35 }} />
                </a>
                <a href='https://github.com/m4hosam/Web-Scraping-E-Commerce'>
                    <AiFillGithub color='white' style={{ fontSize: '20px', position: 'absolute', right: 80, top: 35 }} />
                </a>
                <Box sx={{ my: 5 }}>
                    <ul style={{ color: COLORS.white2, listStyleType: 'square' }}>
                        <li>Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.</li>
                        <li>Implemented a dynamic search engine to search on any laptop or specific seller.</li>
                        <li>Implemented an E‑Commerce website with admin section to add oand delete any product.</li>

                    </ul>
                </Box>
                <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                            '&.MuiTabs-scrollButtons': {
                                color: 'white'
                            },
                        },
                    }}
                >
                    <Skill label="React" />
                    <Skill label="JavaScript" />
                    <Skill label="HTML" />
                    <Skill label="CSS" />
                    <Skill label="React" />
                    <Skill label="JavaScript" />
                    <Skill label="HTML" />
                    <Skill label="CSS" />

                </Tabs>
            </Box>
            {/* Right or left Part (Image Section) */}
            {!smallScreen ?
                <Box sx={{ width: '30%', my: 6 }}>
                    <motion.div
                        initial={{ x: 0, scale: 0, rotate: 0, opacity: .5 }}
                        animate={!rightImage ? { x: -40, scale: 1, rotate: -4 } :
                            { x: 10, scale: 1, rotate: 4 }}
                        whileHover={{
                            scale: 1.2,
                            rotate: 0,
                            opacity: 1,
                            transition: { duration: .5 },
                            x: xDim
                        }
                        }
                        whileTap={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <a href='https://webscrapingcimri.netlify.app/  '>
                            <img src={webscrap} alt="projectImage2" style={{ maxWidth: "100%", maxHeight: 'auto', borderRadius: '10px' }} />
                        </a>
                    </motion.div>
                </Box>

                : null
            }

        </Box >
    );
}