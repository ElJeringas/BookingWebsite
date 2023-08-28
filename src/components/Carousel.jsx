import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import about_1 from '../assets/about.jpg';
import about_2 from '../assets/about_2.jpg';
import about_3 from '../assets/about_3.jpg';
import about_4 from '../assets/about_4.jpg';
import about_5 from '../assets/about_5.jpg';
import '../styles/about.css'
function CBCarousel() {
  return (
    <Carousel   showArrows={true} showThumbs={false} showIndicators={false} interval={1000} transitionTime={1000} swipeable={true} >
    <div className="carousel-slide">
      <img src={about_1} height='400vh' width='100vh' alt="Slide 1" />
    </div>
    <div className="carousel-slide">
      <img src={about_2} height='400vh'  width='100vh%' alt="Slide 2" />
    </div>
    <div className="carousel-slide">
      <img src={about_3} height='400vh'  width='100vh%' alt="Slide 3" />
    </div>
    <div className="carousel-slide">
      <img src={about_4} height='400vh'  width='100vh%' alt="Slide 3" />
    </div>
    <div className="carousel-slide">
      <img src={about_5} height='400vh'  width='100vh%' alt="Slide 3" />
    </div>
  </Carousel>
  )
}

export default CBCarousel