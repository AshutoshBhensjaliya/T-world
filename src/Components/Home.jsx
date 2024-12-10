import React from 'react'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import './Home.css'


function Home() {
  return (
    <div>
        <div class="quote-container">
          <img src='images/banner-bg.png'/>
          <div class="quote-text">"Climb mountains, not so the world can see you, but so you can see the world." – David McCullough Jr.</div>
        </div>
        <About/>
        <Services/>
        <Testimonials/>
    </div>
  )
}

export default Home