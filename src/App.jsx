import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App