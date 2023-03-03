import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion"
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



export default function ProjectCard(props) {
    const smallScreen = useMediaQuery("(max-width: 900px)");
    const rightImage = props.right
    const xDim = !rightImage ? 20 : -20

    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: props.flexDirection },
            p: 1, mb: 10, justifyContent: 'center'
        }}>
            {/* Text Card Details Section */}
            <Box sx={{
                bgcolor: COLORS.black2, width: { xs: '85%', md: '50%' },
                mx: { xs: 0, md: 5 }, px: 4, pt: 4, pb: 2, borderRadius: '10px',
                position: 'relative'
            }}>
                {/* On small screen show transparent Image background */}
                {smallScreen ?
                    <a href={props.data.preview}>
                        <img src={props.data.image} alt="projectImage" className='projectImage' />
                    </a>
                    : null}

                <Typography variant="h7" color={COLORS.white2}>{props.data.projectType}</Typography>
                <Typography variant="h5" color={COLORS.white}>{props.data.title}</Typography>
                <a href={props.data.preview}>
                    <FaRegShareSquare className='icon' color='white' style={{ fontSize: '20px', position: 'absolute', right: 40, top: 35 }} />
                </a>
                <a href={props.data.github}>
                    <AiFillGithub className='icon' color='white' style={{ fontSize: '20px', position: 'absolute', right: 80, top: 35 }} />
                </a>
                <Box sx={{ my: 5 }}>
                    <ul style={{ color: COLORS.white2, listStyleType: 'square' }}>
                        {props.data.description.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}

                    </ul>
                </Box>
                <Tabs
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    value='1'
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                            '&.MuiTabs-scrollButtons': {
                                color: 'white'
                            },
                        },
                    }}
                >
                    {props.data.skills.map((item, index) =>
                        <Skill label={item} key={index} />
                    )}

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
                        <a href={props.data.preview}>
                            <img src={props.data.image} alt="projectImage2" style={{ maxWidth: "100%", maxHeight: 'auto', borderRadius: '10px' }} />
                        </a>
                    </motion.div>
                </Box>

                : null
            }

        </Box >
    );
}