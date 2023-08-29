import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import tripadvisor from '../assets/footer/tripadvisor.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
    <div className='container-grid'>
      <div className='box'>
        {/* <img src={tripadvisor} alt=''/> */}
        <p>Cillum sunt proident duis aute minim duis mollit ipsum anim officia. Esse ad nostrud reprehenderit ex. Cupidatat cupidatat ut mollit eiusmod anim elit consectetur cillum sunt.</p>
        <div className='icon'>
          <i className='fa fa-facebook-f'><FacebookIcon/></i>
          <i className='fa fa-instagram'><InstagramIcon/></i>
          <i className='fa fa-twitter'><TwitterIcon/></i>
        </div>
      </div>
      <div className='box'>
        <h2>Links</h2>
        <ul>
          <li>Company History</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
      </div>
      <div className='box'>
        <h2>Contact Us</h2>
        <p>Est qui aliquip voluptate aute velit esse sit irure velit ipsum laborum non do.</p>
        <i className='fa fa-location-dot'><LocationOnIcon/></i>
        <label>Bolívar y Colón Esquina, Loja 110101 Ecuador<br/></label>
        <i className='fa fa-phone'><LocalPhoneIcon/></i>
        <label>+5939888888 <br/></label>
        <i className='fa fa-envelope'><EmailIcon/></i>
        <label>info@casabolivar.com <br/></label>
      </div>
    </div>
    </footer>
  )
}

export default Footer