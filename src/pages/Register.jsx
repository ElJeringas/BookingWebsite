import React from 'react'
import '../styles/book.css'
import { useTranslation } from 'react-i18next';
function Register() {
  const {t} = useTranslation('global')
  return (
    <section className='book'>
      <div className='container flex_space'>
        <div className='text'>
          <h1><span>{t(`book.highlight`)}</span> {t(`book.spot`)}</h1>
        </div>
        <div className='form'>
          <form className='grid'>
            <input type='date' placeholder='Arrival Date'></input>
            <input type='date' placeholder='Departure Date'></input>
            <input type='number' placeholder={t(`book.adults_input`)}></input>
            <input type='number' placeholder={t(`book.children_input`)}></input>
            <input type='number' placeholder={t(`book.room_input`)}></input>
            <input type='submit' name='' value={t(`book.button`)}></input>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register