import React from 'react'
import Collection from '../components/Collection'
import { useTranslation } from 'react-i18next';
import '../styles/gallery.css'

function Gallery() {
  const {t} = useTranslation('global')
  return (
    <section className='gallery'>
        <div className='container top'>
            <div className='heading'>
                <h1>{t(`gallery.title`)}</h1>
                <h2>{t(`gallery.subtitle`)}</h2>
                <p>{t(`gallery.description`)}</p>
            </div>
            <div className='content mtop'>
                <Collection/>
            </div>
        </div>
    </section>
  )
}

export default Gallery