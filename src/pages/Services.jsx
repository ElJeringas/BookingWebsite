import '../styles/services.css'
import coffee from '../assets/services/coffee.png'
import hotel from '../assets/services/hotel.png'
import pet from '../assets/services/pet.png'
import photo from '../assets/services/photo.png'
import wedding from '../assets/services/wedding.png'
import { useTranslation } from 'react-i18next';


function Services() {
  const {t} = useTranslation('global')
  return (
    <section className='counter top'>
      <div className='container grid'>
        <div className='services-box'>
          <h1>{t(`services.cafe`)}</h1>
          <img className='icon' src={coffee} alt='' width='58%' height='58%'/>
          <hr/>
        </div>
        <div className='services-box'>
          <h1>{t(`services.hotel`)}</h1>
          <img className='icon' src={hotel} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
        <div className='services-box'>
          <h1>{t(`services.photo`)}</h1>
          <img className='icon' src={photo} alt='' width='40%' height='40%'/>
          <hr/>
        </div>
        <div className='services-box'>
          <h1>{t(`services.rings`)}</h1>
          <img className='icon' src={wedding} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
        <div className='centered-item'>
          <h1>{t(`services.more`)}</h1>
          <img className='icon' src={pet} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
      </div>
    </section>
  )
}

export default Services