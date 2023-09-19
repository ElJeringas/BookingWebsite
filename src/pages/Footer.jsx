import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

function Footer() {
  const {t} = useTranslation('global')
  return (
    <footer>
      <div className='container-grid'>
        <div className='rounded-map'>
          <iframe
            title='Casa Bolivar Location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.9215532668373!2d-79.20225730386164!3d-3.9954528221924552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb49ca0f439299%3A0x512621ed53270efe!2sCASA%20BOLIVAR%20HOTEL%20MUSEO!5e0!3m2!1sen!2sec!4v1694540860076!5m2!1sen!2sec" 
            width="200" 
            height="200"
            frameBorder={'0'}
            allowfullscreen=""
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>
        <div className='box'>
        <h2>{t(`footer.title1`)}</h2>        
          <div className='icon'>
            <a href="https://www.facebook.com/casabolivarhotelmuseo" target="_blank" rel="noopener noreferrer">
              <i className='fa fa-facebook-f'><FacebookIcon/></i>
            </a>
            <a href="https://www.instagram.com/casabolivarhotelmuseo/" target="_blank" rel="noopener noreferrer">
              <i className='fa fa-instagram'><InstagramIcon/></i>
            </a>
            <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer">
              <i className='fa fa-twitter'><TwitterIcon/></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=593979723405&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <i className='fa fa-whatsapp'><WhatsAppIcon/></i>
            </a>
          </div>
        </div>
        <div className='box'>
          <h2>{t(`footer.title2`)}</h2>
          <ul>
            <li><a href="https://www.tripadvisor.es/Hotel_Review-g644406-d23806734-Reviews-Casa_Bolivar_Hotel_Museo-Loja_Loja_Province.html" target="_blank" rel="noopener noreferrer">Tripadvisor</a></li>
            <li><a href="https://www.hoteles.com/ho2874823648/casa-bolivar-hotel-museo-loja-ecuador/" target="_blank" rel="noopener noreferrer">Hoteles.com</a></li>
            <li><a href="https://www.booking.com/hotel/ec/casa-bolivar-museo.es.html?auth_success=1" target="_blank" rel="noopener noreferrer">Booking</a></li>
          </ul>
        </div>
        <div className='box'>
          <h2>{t(`footer.title3`)}</h2>
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

export default Footer;
