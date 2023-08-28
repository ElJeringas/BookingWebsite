import React from 'react'
import about from '../assets/about.jpg'
import '../styles/about.css'
import CBCarousel from '../components/Carousel'
function About() {
  return (
    <section className='about top'>
      <div className='container flex'>
        <div className='left'>
          <div className='heading'>
            <h1>Welcome</h1>
            <h2>Casa Bolivar</h2>
          </div>
          <p>In ipsum esse duis pariatur.Nulla incididunt incididunt 
          sunt nisi eiusmod dolor commodo qui labore dolor et
            amet exercitation aliqua. Minim officia laboris et duis. 
            Amet minim aute magna dolor anim laborum est cillum irure culpa
          </p>
          <button className='primary-btn'>More About us</button>
        </div>
        <div className='right'>
          {/* <img  height='75%' width='100%' src={about} alt=''/> */}
          <CBCarousel/>
        </div>
      </div>
    </section>
  )
}

export default About