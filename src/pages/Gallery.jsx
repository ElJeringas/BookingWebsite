import React from 'react'
import Collection from '../components/Collection'
import '../styles/gallery.css'

function Gallery() {
  return (
    <section className='gallery'>
        <div className='container top'>
            <div className='heading'>
                <h1>Photos</h1>
                <h2>Our Gallery</h2>
                <p>Discover our gallery showcasing the perfect blend of colonial elegance, comfortable rooms, expansive spaces, and the delectable offerings of our on-site restaurant.</p>
            </div>
            <div className='content mtop'>
                <Collection/>
            </div>
        </div>
    </section>
  )
}

export default Gallery