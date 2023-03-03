import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from '../Colors';
import Divider from '@mui/material/Divider';




export default function Header(props) {

    return (
        <Box id={props.id} sx={{ maxWidth: '80%', margin: '4rem auto', mt: 30 }} >
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
