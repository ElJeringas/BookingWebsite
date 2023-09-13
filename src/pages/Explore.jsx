import React from 'react'
import Rooms from '../components/Rooms'

function Explore() {
  return (
    <section className='rooms'>
        <div className='container top'>
            <div className='heading'>
                <h1>Rooms</h1>
                <h2>Find your Place</h2>
                <p>Experience the perfect blend of timeless elegance and modern comfort in our meticulously designed rooms.</p><br/>
            </div>
            <Rooms/>
        </div>

    </section>
  )
}

export default Explore