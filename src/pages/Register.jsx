import React from 'react'
import '../styles/book.css'
function Register() {
  return (
    <section className='book'>
      <div className='container flex_space'>
        <div className='text'>
          <h1><span>Book </span> Your Rooms</h1>
        </div>
        <div className='form'>
          <form className='grid'>
            <input type='date' placeholder='Arrival Date'></input>
            <input type='date' placeholder='Departure Date'></input>
            <input type='number' placeholder='Adults'></input>
            <input type='number' placeholder='Children'></input>
            <input type='number' placeholder='Pets'></input>
            <input type='submit' name='' value='Check Availability'></input>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register