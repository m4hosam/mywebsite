import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pic from '../assets/fiyat.png'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import HexagonIcon from '@mui/icons-material/Hexagon';
import { COLORS } from '../Colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './styles.css'


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function RecipeReviewCard() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            p: 1, my: 5, justifyContent: 'center'
        }}>
            <Box sx={{ bgcolor: COLORS.black2, maxWidth: 500, p: 4, position: 'relative' }}>
                <Typography variant="h7" color={COLORS.white2}>MERN FULL STACK</Typography>
                <Typography variant="h5" color={COLORS.white}>E‑Commerce Website</Typography>
                <Box sx={{ my: 7 }}>
                    {/* <List sx={{ color: COLORS.white2, fontSize: '10px', mx: 1 }}>
                        <ListItem>
                            <ListItemIcon>
                                <HexagonIcon sx={{ color: COLORS.black5, fontSize: '10px' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers."
                            />
                        </ListItem>,

                    </List> */}
                    <ul style={{ color: COLORS.white2, listStyleType: 'square' }}>
                        <li>Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.</li>
                        <li>Implemented a dynamic search engine to search on any laptop or specific seller.</li>
                        <li>Implemented an E‑Commerce website with admin section to add oand delete any product.</li>

                    </ul>
                    {/* <HexagonIcon sx={{ color: COLORS.black5, fontSize: '10px', mx: 1 }} />
                    <Typography variant="h9" color={COLORS.white2}>Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.</Typography> */}
                </Box>
                <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 30 }}>
                    <Chip label="React" sx={{ color: COLORS.white, bgcolor: COLORS.black5 }} />
                    <Chip label="JavaScript" sx={{ color: COLORS.white, bgcolor: COLORS.black5 }} />
                    <Chip label="HTML" sx={{ color: COLORS.white, bgcolor: COLORS.black5 }} />
                    <Chip label="CSS" sx={{ color: COLORS.white, bgcolor: COLORS.black5 }} />

                </Stack>
            </Box>
            <Box sx={{ maxWidth: 400 }}>
                <div style={{ height: '25rem', width: '25rem', backgroundColor: COLORS.black3, margin: '0' }}></div>
            </Box>
        </Box >
    );
}