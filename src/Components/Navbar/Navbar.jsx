import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { COLORS } from "../Colors"
// import photo from '../Images/logo.jpg'

const drawerWidth = 280;
const navItems = ['About', 'Experience', 'Projects', 'Contact'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: COLORS.white }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img style={{ width: 70, height: 70 }} src={process.env.PUBLIC_URL + '/Images/m4h.png'} />
            </Typography>

            <Divider sx={{ mx: 5, my: 5 }} color='#fff' />

            <List>
                {navItems.map((item) => (
                    <ListItem key={item} >
                        <ListItemButton sx={{
                            margin: '1rem',
                            color: COLORS.white, backgroundColor: COLORS.black3,
                            ':hover': {
                                bgcolor: COLORS.black4,
                            }, textAlign: 'center'
                        }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: COLORS.black1 }}>
                <Toolbar>

                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        <img style={{ width: 70, height: 70 }} src={process.env.PUBLIC_URL + '/Images/logo.jpg'} />
                    </Typography>



                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{
                                marginRight: '1rem',
                                color: COLORS.white, backgroundColor: COLORS.black1,
                                ':hover': {
                                    bgcolor: COLORS.black4,
                                }
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <IconButton

                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' }, marginLeft: 'auto', justifyContent: 'flex-end' }}
                    >
                        {!mobileOpen ? (
                            <BiMenuAltRight />
                        ) : (
                            <AiOutlineClose />
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav" >
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: COLORS.black3
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
