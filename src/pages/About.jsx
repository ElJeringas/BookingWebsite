import React, { useState } from 'react';
import about from '../assets/about.jpg';
import '../styles/about.css';
import CBCarousel from '../components/Carousel';
import { useTranslation } from 'react-i18next';

function About() {
  const [showMore, setShowMore] = useState(false);
  const {t} = useTranslation('global')

  // Toggle the 'showMore' state when the button is clicked
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='about top'>
      <div className='container flex'>
        <div className='left'>
          <div className='heading'>
            <h1>{t(`about.head`)}</h1>
            <h2>{t(`about.title`)}</h2>
          </div>
          <h4><blockquote>{t(`about.line_one`)}</blockquote></h4><br/>
          <div className={`text-container ${showMore ? 'show-more' : ''}`}>
            <p>{t(`about.paragraph_1`)}</p><br/>

            {showMore && (
              <React.Fragment> 
                <h4>{t(`about.line_two`)}</h4><br/>
                <p>{t(`about.paragraph_2`)}</p><br/>
                <h4>{t(`about.line_three`)}</h4><br/>
                <p>O{t(`about.paragraph_3`)}</p><br/>
                <h4>{t(`about.line_four`)}</h4><br/>
                <p>{t(`about.paragraph_4`)}</p><br/>
                <h4>{t(`about.line_five`)}</h4>
              </React.Fragment>
            )}
          </div>

          {/* Button to toggle 'showMore' state */}
          <button className='primary-btn' onClick={toggleShowMore}>
            {showMore ? t(`about.button_b`) : t(`about.button_a`)}
          </button>
        </div>
        <div className='right'>
        <div className='image-container'>
        <CBCarousel/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About;
