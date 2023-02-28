import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from '../Colors';
import Divider from '@mui/material/Divider';




export default function Header(props) {

    return (
        <Box sx={{ my: 10, maxWidth: '80%', margin: '10rem auto' }} >
            <Divider
                sx={{
                    "&::before, &::after": {
                        borderColor: COLORS.black3,
                    },
                }}
            >
                <Typography variant="h5" sx={{ mx: 2 }} color={COLORS.white2}>{props.label}</Typography>
            </Divider>
        </Box>

    )
}
