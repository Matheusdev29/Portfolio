import { CssBaseline } from "@mui/material"
import Navbar from "../../components/navbar/navbar"
import Hero from "./Sections/Hero/Hero"
import Projects from "./Sections/Projects/project"
import Footer from "../../components/Footer/Footer"
import About from "./Sections/About/About"
function Home() {
 
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default Home
