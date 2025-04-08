import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar' // ✅ only one Navbar import
import Hero from './Components/Hero'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import WorkingProcess from './Components/WorkingProcess'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar /> {/* ✅ Only place it here */}
      
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="process">
        <WorkingProcess />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <Footer />
    </div>
  )
}

export default App
