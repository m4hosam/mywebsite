import Navbar from "./Navbar/Navbar"
import Bio from "./Bio/Bio"
import Experience from "./Experience/Experience"
import Projects from "./Projects/Projects"
import Divider from "./Divider/Divider"
import About from "./About/About"
import Footer from "./Footer"
import React from "react"
import Container from '@mui/material/Container';
import { motion } from "framer-motion"


function App() {
  return (
    <>
      {/* <div style={{ position: 'fixed', width: '3rem', height: '40vh', backgroundColor: '	#3c3c3c' }}></div> */}
      {/* The content of my CV will be listed below */}
      <Container fixed>
        <Navbar />
        <Bio />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Divider id="about" label="About Me" />
          <About />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Divider id="experience" label="Experience" />
          <Experience />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Divider id="projects" label="Projects" />
          <Projects />
        </motion.div>

      </Container>
      <Footer />
    </>
  )
}

export default App;
