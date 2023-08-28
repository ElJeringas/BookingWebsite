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
                <p>Sunt ullamco ad minim pariatur cupidatat veniam occaecat veniam. Dolor ut deserunt labore laboris anim ut aliqua. Pariatur anim amet pariatur occaecat do in exercitation.</p>
            </div>
            <div className='content mtop'>
                <Collection/>
            </div>
        </div>
    </section>
  )
}

export default Gallery