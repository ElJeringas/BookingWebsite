import React from 'react';
import { ImageList, ImageListItem, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import collection1 from '../assets/Collection/1.jpg';
import collection2 from '../assets/Collection/2.jpg';
import collection3 from '../assets/Collection/3.jpg';
import collection4 from '../assets/Collection/4.jpg';
import collection5 from '../assets/Collection/5.jpg';
import collection6 from '../assets/Collection/6.jpg';
import collection7 from '../assets/Collection/7.jpg';
import collection8 from '../assets/Collection/8.jpg';
import collection9 from '../assets/Collection/9.jpg';

export default function Collection() {
  const firstThreeImages = itemData.slice(0, 2);
  const remainingImages = itemData.slice(2);

  return (
    <div>
      <ImageList>
        {firstThreeImages.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 2;
          return(
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              width='50%'
              height="50%"
            />
          </ImageListItem>
          )
        })}
      </ImageList>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        </AccordionSummary>
        <AccordionDetails>
          <ImageList>
            {remainingImages.map((item) => {
              const cols = item.featured ? 2 : 1;
              const rows = item.featured ? 2 : 2;
              return(
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  width='50%'
                  height="50%"
                />
              </ImageListItem>
              )
            })}
          </ImageList>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const itemData = [
  {
    img: collection1,
    title: 'Stairs',
  },
  {
    img: collection2,
    title: 'Rooms',
  },
  {
    img: collection3,
    title: 'Museum',
    featured: true,
  },
  {
    img: collection4,
    title: 'Museum',
    featured: true,
  },
  {
    img: collection5,
    title: 'Coffee',
  },
  {
    img: collection6,
    title: 'Wine',
  },
  {
    img: collection7,
    title: 'Restaurant',
    featured: true,
  },
  {
    img: collection8,
    title: 'Entrance',
  },
  {
    img: collection9,
    title: 'Church',
  },

];