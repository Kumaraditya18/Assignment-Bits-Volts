import React from 'react'
import "./App.css"
import Hero from './Components/Hero'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import WorkingProcess from './Components/WorkingProcess'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WorkingProcess />
      <Testimonials />
      
      <Footer />
    </div>
  )
}

export default App
