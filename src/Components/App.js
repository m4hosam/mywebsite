import Navbar from "./Navbar/Navbar"
import About from "./About/About"
import React from "react"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <>
      {/* <div style={{ position: 'fixed', width: '3rem', height: '40vh', backgroundColor: '	#3c3c3c' }}></div> */}
      {/* The content of my CV will be listed below */}
      <Container fixed>
        <Navbar />
        <About />

        {/* <Box sx={{ bgcolor: '#4d4d4d', height: '100vh' }} />
        <Box sx={{ bgcolor: '#4d4d4d', height: '100vh' }} />
        <Box sx={{ bgcolor: '#4d4d4d', height: '100vh' }} />
        <Box sx={{ bgcolor: '#4d4d4d', height: '100vh' }} /> */}
      </Container>
    </>
  )
}

export default App;
