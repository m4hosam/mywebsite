import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from './Colors';
import Divider from '@mui/material/Divider';
import { AiFillGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Stack from '@mui/material/Stack';



export default function Header(props) {

    return (
        <Box sx={{
            my: 5, display: 'flex', height: '7rem',
            justifyContent: 'space-between', alignItems: 'center',
            flexDirection: 'column'
        }} >
            <Divider
                color={COLORS.black4}
                sx={{
                    width: '70%'
                }}
            />
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                <a href="https://instagram.com/m4hosam">
                    <BsInstagram className='icon' color='white' style={{ fontSize: '20px' }} />
                </a>
                <a href="https://www.linkedin.com/in/m4hosam/">
                    <FiLinkedin className='icon' color='white' style={{ fontSize: '20px' }} />
                </a>
                <a href="https://github.com/m4hosam">
                    <AiFillGithub className='icon' color='white' style={{ fontSize: '20px' }} />
                </a>
                <a href="mailto:mohamedhosaam154@gmail.com">
                    <FiMail className='icon' color='white' style={{ fontSize: '20px' }} />
                </a>
            </Stack>
            <Typography variant="h8" sx={{ mx: 2 }} color={COLORS.white2}>Designed & Built by Mohamed Hosam</Typography>
        </Box >

    )
}
