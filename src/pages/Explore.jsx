import React from 'react'
import Rooms from '../components/Rooms'

function Explore() {
  return (
    <section className='rooms'>
        <div className='container top'>
            <div className='heading'>
                <h2>Our Rooms</h2>
                <p>Sit sint reprehenderit exercitation eiusmod officia fugiat sint nisi.</p>
            </div>
            <Rooms/>
        </div>

    </section>
  )
}

export default Explore