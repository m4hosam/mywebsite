import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../assets/logo.png';
import resume from "../assets/resume.pdf"
import { motion } from "framer-motion"
// import photo from '../Images/logo.jpg'

const drawerWidth = 260;
const navItems = ['About', 'Experience', 'Projects', 'Contact'];

const variants = {
    open: { rotate: 0, y: 0 },
    closed: { rotate: -180, y: -8 },
}

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: "var(--white1)" }}>

            <List sx={{ mt: 10 }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{
                            borderRadius: '7px',
                            margin: '1rem',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Button key={item} sx={{
                                width: 'inherit',
                                px: 8,
                                textTransform: 'none',
                                fontSize: '16px',
                                color: "var(--white1)", backgroundColor: "var(--black3)",
                                ':hover': {
                                    bgcolor: "var(--black4)",
                                }
                            }}
                                href={'#' + item.toLowerCase()}
                            >
                                {item}
                            </Button>
                            {/* <ListItemText primary={item} href={'#' + item.toLowerCase()} /> */}
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>


            <Button href={resume} variant="contained" sx={{
                px: 10,
                mt: 10,
                textTransform: 'none',
                color: "var(--white1)", backgroundColor: "var(--green3)",
                ':hover': {
                    bgcolor: "var(--green2)",
                }
            }}>
                Resume
            </Button>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: "var(--black1)" }}>
                <Toolbar sx={{ justifyContent: 'space-between', mx: { xs: 0, sm: 3 } }}>
                    <a href='/'>
                        <img style={{ width: 70 }} src={logo} alt="logo" />
                    </a>

                    <Box sx={{ display: { xs: 'none', md: 'block' }, mr: 5 }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{
                                px: 3,
                                textTransform: 'none',
                                marginRight: '1rem',
                                fontSize: '15px',
                                color: "var(--white1)", backgroundColor: "var(--black1)",
                                ':hover': {
                                    bgcolor: "var(--black4)",
                                }
                            }}
                                href={'#' + item.toLowerCase()}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Button href={resume} variant="contained" sx={{
                        px: 2,
                        fontFamily: 'inherit',
                        display: { xs: 'none', sm: 'block' },
                        textTransform: 'none',
                        color: "white", backgroundColor: "var(--green3)",
                        ':hover': {
                            bgcolor: "var(--green2)",
                            color: "var(--black3)"
                        }
                    }}>
                        Resume
                    </Button>


                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' }, marginLeft: 'auto', justifyContent: 'flex-end', fontSize: '30px' }}
                    >
                        {!mobileOpen ? (
                            <motion.nav
                                color='white'
                                animate={!mobileOpen ? "open" : "closed"}
                                variants={variants}
                            >
                                <BiMenuAltRight style={{ fontSize: '32px' }} />
                            </motion.nav>
                        ) : (
                            <motion.nav
                                color='white'
                                animate={!mobileOpen ? "open" : "closed"}
                                variants={variants}
                            >
                                <AiOutlineClose />
                            </motion.nav>
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav" >
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "var(--black3)"
                        }
                    }}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
