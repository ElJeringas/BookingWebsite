import React from 'react'
import Rooms from '../components/Rooms'
import { useTranslation } from 'react-i18next';

function Explore() {
  const {t} = useTranslation('global')
  return (
    <section className='rooms'>
        <div className='container top'>
            <div className='heading'>
                <h1>{t(`rooms.title`)}</h1>
                <h2>{t(`rooms.subtitle`)}</h2>
                <p>{t(`rooms.description`)}</p><br/>
            </div>
            <Rooms/>
        </div>

    </section>
  )
}

export default Explore