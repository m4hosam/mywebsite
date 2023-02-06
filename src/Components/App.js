import Navbar from "./Navbar/Navbar"
import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function App() {
  return (
    <>
      {/* <div style={{ position: 'fixed', width: '3rem', height: '40vh', backgroundColor: '	#3c3c3c' }}></div> */}
      {/* The content of my CV will be listed below */}
      <Container fixed>
        <Navbar />

        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </>
  )
}

export default App;
