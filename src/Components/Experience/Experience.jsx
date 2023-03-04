import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion"
import { FaRegShareSquare } from "react-icons/fa";



const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(2),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(20, 20, 20, 0.32)',
        },

    }),
);


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            sx={{ width: { xs: '100%', md: '80%' } }}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 10
                        }}
                    >
                        {children}
                    </motion.div>
                </Box>
            )
            }
        </Box >
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const smallScreen = useMediaQuery("(max-width: 900px)");

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "var(--black2)", display: 'flex',
                mx: { xs: 0, md: 10 }, p: 1,
                borderRadius: '5px',
                flexDirection: { xs: 'column', md: 'row' }, minHeight: '22rem'
            }}
        >
            <Tabs
                scrollButtons
                orientation={smallScreen ? "horizonal" : "vertical"}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                TabIndicatorProps={{ style: { background: "#fff" } }}
                sx={{
                    borderRight: 1, borderColor: "var(--black3)", '.MuiTabs-indicator': {
                        left: 0
                    },
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                        '&.MuiTabs-scrollButtons': {
                            color: 'white'
                        },
                    },
                }}
            >
                <StyledTab label="Kocaeli University" {...a11yProps(0)} />
                <StyledTab label="Freelance" {...a11yProps(1)} />
            </Tabs>


            <TabPanel value={value} index={0} sx={{ maxWidth: { xs: '100', md: '80%' } }}>
                <Typography variant="h8" color="var(--white2)">Jun. 2022 ‑ Nov. 2022</Typography>
                <Box sx={{ display: 'flex', felxDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" color="var(--white1)">FULL STACK DEVELOPER</Typography>
                    <a href='https://webscrapingcimri.netlify.app/'>
                        <FaRegShareSquare className='icon' color='white' style={{ fontSize: '20px', marginLeft: '20%' }} />
                    </a>
                </Box>
                <Box sx={{ my: 3 }}>
                    <ul style={{ color: "var(--white3)", listStyleType: 'square' }}>
                        <li> Worked on 'Yemek Bursu Website' and was responsible of student application form and its security. We used ASP.Net
                            MVC framework to develop the whole website.</li>
                        <li>Implemented a dynamic search engine to search on any laptop or specific seller.</li>
                        <li>Made sure the student is authenticated and securely logged in to apply to the scholarship.</li>
                        <li>Implemented an application view page for students to update or delete their application.</li>
                        <li>Implemented input validation control to make sure student fill all fields in the page.</li>
                        <li>Was responsible to solve any bugs or issues that any student might have after deploying the website.</li>

                    </ul>
                </Box>
            </TabPanel>


            <TabPanel value={value} index={1} sx={{ position: 'relative', maxWidth: { xs: '100', md: '80%' } }}>
                <Typography variant="h8" color="var(--white2)">Jun. 2020 ‑ Oct. 2020</Typography>
                <Box sx={{ display: 'flex', felxDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" color="var(--white1)">Motion Graphic Designer</Typography>
                    <a href='https://vimeo.com/mhosam'>
                        <FaRegShareSquare className='icon' color='white' style={{ fontSize: '20px', marginLeft: '20%' }} />
                    </a>
                </Box>
                <Box sx={{ my: 3 }}>
                    <ul style={{ color: "var(--white3)", listStyleType: 'square' }}>
                        <li>Worked on some logo animation videos with Adobe After Effects Tool for some freelance jobs.</li>
                        <li>Worked on some video Editing and motion graphics projects that are listed in my vimeo page.</li>

                    </ul>
                </Box>
            </TabPanel>
        </Box >
    );
}