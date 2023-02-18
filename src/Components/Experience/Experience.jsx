import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { COLORS } from '../Colors';



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
                my: 20, flexGrow: 1,
                bgcolor: COLORS.black2, display: 'flex',
                height: 350, mx: { xs: 0, md: 10 }, p: 1,
                borderRadius: '5px',
                flexDirection: { xs: 'column', md: 'row' }
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
                    borderRight: 1, borderColor: 'divider', '.MuiTabs-indicator': {
                        left: 0,
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
                {/* <StyledTab label="Item Three" {...a11yProps(2)} />
                <StyledTab label="Item Four" {...a11yProps(3)} />
                <StyledTab label="Item Five" {...a11yProps(4)} />
                <StyledTab label="Item Six" {...a11yProps(5)} />
                <StyledTab label="Item Seven" {...a11yProps(6)} /> */}
            </Tabs>
            <TabPanel value={value} index={0}>

                <Typography variant="h5" color={COLORS.white2}>Hi, I'm</Typography>
                <Typography variant="h3" color={COLORS.white}>Mohamed Hosam</Typography>
                <Typography variant="h5" color={COLORS.white}>Software Engineer</Typography>
                <Typography variant="h9" color={COLORS.white2}>I study Computer Engineering "3rd Year" at Kocaeli University in Turkey. In the Past 3 years i have made a lot of projects in Software and Web development fields. I have created 2 big projects that deal with database (SQL, MongoDB). One of them is interactive comment section the other one is bank management system. You can see my projects in the project section.</Typography>

            </TabPanel>
            <TabPanel value={value} index={1}>

                <Typography variant="h5" color={COLORS.white2}>Hi, I'm</Typography>
                <Typography variant="h3" color={COLORS.white}>Mohamed Hosam</Typography>
                <Typography variant="h5" color={COLORS.white}>Software Engineer</Typography>
                <Typography variant="h9" color={COLORS.white2}>I study Computer Engineering "3rd Year" at Kocaeli University in Turkey. In the Past 3 years i have made a lot of projects in Software and Web development fields. I have created 2 big projects that deal with database (SQL, MongoDB). One of them is interactive comment section the other one is bank management system. You can see my projects in the project section.</Typography>


            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel> */}
        </Box >
    );
}