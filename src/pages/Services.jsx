import '../styles/services.css'
import coffee from '../assets/services/coffee.png'
import hotel from '../assets/services/hotel.png'
import pet from '../assets/services/pet.png'
import photo from '../assets/services/photo.png'
import wedding from '../assets/services/wedding.png'
function Services() {
  return (
    <section className='counter top'>
      <div className='container grid'>
        <div className='box'>
          <h1>Cafeteria</h1>
          <img className='icon' src={coffee} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
        <div className='box'>
          <h1>Hotel</h1>
          <img className='icon' src={hotel} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
        <div className='box'>
          <h1>Photo Sessions</h1>
          <img className='icon' src={photo} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
        <div className='box'>
          <h1>Weddings</h1>
          <img className='icon' src={wedding} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
        <div className='centered-item'>
          <h1>More...</h1>
          <img className='icon' src={pet} alt='' width='50%' height='50%'/>
          <hr/>
        </div>
      </div>
    </section>
  )
}

export default Services