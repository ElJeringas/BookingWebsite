import React, { useState } from 'react';
import about from '../assets/about.jpg';
import '../styles/about.css';
import CBCarousel from '../components/Carousel';

function About() {
  const [showMore, setShowMore] = useState(false);

  // Toggle the 'showMore' state when the button is clicked
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='about top'>
      <div className='container flex'>
        <div className='left'>
          <div className='heading'>
            <h1>Welcome</h1>
            <h2>Casa Bolivar</h2>
          </div>
          <h4><blockquote>A Timeless Retreat in the Heart of Loja, Ecuador</blockquote></h4><br/>
          <div className={`text-container ${showMore ? 'show-more' : ''}`}>
            <p>Nestled amidst the picturesque streets of Loja, Casa Bolivar invites you to step back in time and experience the charm and elegance of a bygone era.<br/>
            Housed within a beautifully preserved colonial mansion, Casa Bolivar is more than just a hotel; 
            it's a captivating journey through history and a gateway to the rich cultural tapestry of this enchanting city.</p><br/>

            {showMore && (
              <React.Fragment> 
                <h4>A Glimpse into History:</h4><br/>
                <p>Casa Bolivar's story begins centuries ago, when it was originally built as a grand colonial residence.<br/>
                Today, its immaculate architecture and meticulously preserved details transport guests to a time when Spanish colonial influence left an indelible mark on Loja. 
                Each corner of this historic gem exudes an aura of timeless beauty, providing a unique opportunity to connect with Ecuador's colonial past.</p><br/>
                <h4>Elegant Accommodations:</h4><br/>
                <p>Our carefully curated guest rooms and suites seamlessly blend the charm of yesteryears with modern comforts. Every room at Casa Bolivar offers a cozy haven for travelers, featuring antique furnishings, luxurious textiles, and all the amenities you need for a comfortable stay.<br/>
                Whether you choose a room with a view of the bustling streets or one that opens onto our serene courtyard, you'll find a perfect oasis within Casa Bolivar.</p><br/>
                <h4>Captivating Courtyard:</h4><br/>
                <p>The heart of Casa Bolivar is undoubtedly its enchanting courtyard. With its lush greenery, trickling fountains, and inviting seating areas, it provides a serene escape from the city's hustle and bustle.<br/>
                It's the ideal spot to enjoy a leisurely breakfast, unwind with a book, or simply soak in the ambiance of this colonial masterpiece.</p><br/>
                <h4>Bienvenidos a Casa Bolivar - Where History and Hospitality Unite!</h4>
              </React.Fragment>
            )}
          </div>

          {/* Button to toggle 'showMore' state */}
          <button className='primary-btn' onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'More About Us'}
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
