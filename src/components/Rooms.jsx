import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import individual1 from '../assets/rooms/room1_individual/1.jpg'
import individual2 from '../assets/rooms/room1_individual/2.jpg'
import individual3 from '../assets/rooms/room1_individual/3.jpg'
import individual4 from '../assets/rooms/room1_individual/4.jpg'
import individual5 from '../assets/rooms/room1_individual/5.jpg'
import individual6 from '../assets/rooms/room1_individual/6.jpg'
import doble1 from '../assets/rooms/room2_doble/1.jpg'
import doble2 from '../assets/rooms/room2_doble/2.jpg'
import doble3 from '../assets/rooms/room2_doble/3.jpg'
import doble4 from '../assets/rooms/room2_doble/4.jpg'
import triple1 from '../assets/rooms/room4_triple/1.jpg'
import triple2 from '../assets/rooms/room4_triple/2.jpg'
import triple3 from '../assets/rooms/room4_triple/3.jpg'
import triple4 from '../assets/rooms/room4_triple/4.jpg'
import triple5 from '../assets/rooms/room4_triple/5.jpg'
import { Card, CardActionArea, CardContent,CardActions, CardMedia, Box } from "@mui/material";
import { useTranslation } from 'react-i18next';
import '../styles/rooms.css'

function Rooms() {
  const {t} = useTranslation('global')
  const ImageCarousel = ({ images }) => (
    <Carousel showArrows={true} showThumbs={false} showIndicators={false} interval={1000} transitionTime={1000} swipeable={true}>
      {images.map((image, index) => (
        <div key={index} className="items">
          <div className="image">
            <img src={image} alt={`Image ${index}`}  height='250vh'  width='80vh' />
          </div>

        </div>
      ))}
    </Carousel>
  );

  const room1Images = [
    individual1,
    individual2,
    individual3,
    individual4,
    individual5,
    individual6
  ];

  const room2Images = [
    doble1,
    doble2,
    doble3,
    doble4,
  ];

  const room3Images = [
    triple1,
    triple2,
    triple3,
    triple4,
    triple5
  ];

  return (
    <Box container spacing={2} xs={6} sm={4} md={12} className="rooms-container">
        <Card sx={{ maxWidth: 345 }} className="room-card">
          <CardActionArea>
            <CardMedia
              component='div'
              height={300}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="card-media"
            >
              <ImageCarousel images={room1Images} />
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <h2>{t(`Card1.title`)}</h2>
            <p>{t(`Card1.description`)}</p>
          </CardContent>
          <CardActions>
            <button className="primary-btn">{t(`Card1.button`)}</button>
            <h3>$90  <span> <br/>{t(`Card1.price`)}</span></h3>
          </CardActions>
        </Card>
      
        <Card sx={{ maxWidth: 345 }} className="room-card">
          <CardActionArea>
            <CardMedia
              component='div'
              height={300}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="card-media"
            >
              <ImageCarousel images={room2Images} />
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <h2>{t(`Card2.title`)}</h2>
            <p>{t(`Card2.description`)}</p>
          </CardContent>
          <CardActions>
            <button className="primary-btn">{t(`Card2.button`)}</button>
            <h3>$145  <span> <br/>{t(`Card2.price`)}</span></h3>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="room-card">
          <CardActionArea>
            <CardMedia
              component='div'
              height={300}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="card-media"
            >
              <ImageCarousel images={room3Images} />
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <h2>{t(`Card3.title`)}</h2>
            <p>{t(`Card3.description`)}</p>
          </CardContent>
          <CardActions>
            <button className="primary-btn">{t(`Card3.button`)}</button>
            <h3>$110  <span> <br/>{t(`Card3.price`)}</span></h3>
          </CardActions>
        </Card>
      
    </Box>
  );
}

export default Rooms;
