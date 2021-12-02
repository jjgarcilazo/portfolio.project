import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    
      <Particles
  style={{ position: "absolute" }}
  height="95%"
  width="95%"
  params={{
    particles: {
      color: {
        value: "#f9ab00"
      },
      line_linked: {
        color: {
          value: "#f9ab00"
        }
      },
      number: {
        value: 100
      },
      size: {
        value: 8
      }
    }
  }}
/>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App