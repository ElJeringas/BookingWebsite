import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css';
import carousel_1 from '../assets/carousel_1.jpg';
import carousel_2 from '../assets/carousel_2.jpg';
import carousel_3 from '../assets/carousel_3.jpg';

function Home() {
  return (
    <div className="carousel-container"> {/* Add a container around the Carousel */}
      <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} showIndicators={false} interval={5000} transitionTime={5000} swipeable={true} >
        <div className="carousel-slide">
          <img src={carousel_1} height='50%' width='100%' alt="Slide 1" />
          <div className="carousel-text">
            <h2>Spend Your Holiday</h2>
            <p>Some Description about.</p>
            <button>Read More</button>
            <button className='secondaty-btn'>Contact Us</button>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={carousel_2} height='50%' width='100%' alt="Slide 2" />
          <div className="carousel-text">
            <h2>Spend Your Holiday</h2>
            <p>Some description about.</p>
            <button>Read More</button>
            <button className='secondaty-btn'>Contact Us</button>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={carousel_3} height='50%' width='100%' alt="Slide 3" />
          <div className="carousel-text">
            <h2>Spend Your Holiday</h2>
            <p>Some description about.</p>
            <button>Read More</button>
            <button className='secondaty-btn'>Contact Us</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
