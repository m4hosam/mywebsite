import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from "./Navbar/Navbar"
import Bio from "./Bio/Bio"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Divider from "./Header"
import About from "./About/About"
import Footer from "./Footer"
import React from "react"
import { motion } from "framer-motion"


function App() {
  return (
    <>
      <Container fixed>
        <Navbar />
        <Bio />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Box id="about" sx={{ pt: 1 }}>
            <Divider label="About Me" />
            <About />
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Box id="experience" sx={{ pt: 1, mb: 10 }}>
            <Divider label="Experience" />
            <Experience />
          </Box>
        </motion.div>


        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>

      </Container>
      <Footer />
    </>
  )
}

export default App;
