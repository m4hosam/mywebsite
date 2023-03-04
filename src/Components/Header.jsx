import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';




export default function Header(props) {

    return (
        <Box id={props.id} sx={{ minWidth: '80%', maxWidth: '80%', margin: '4rem auto', mt: 15 }} >
            <Divider
                sx={{
                    "&::before, &::after": {
                        borderColor: "var(--black3)",
                    },
                }}
            >
                <Typography variant="h5" sx={{ mx: 2 }} color="var(--green2)">{props.label}</Typography>
            </Divider>
        </Box>

    )
}
