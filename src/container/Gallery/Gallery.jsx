import React from 'react';

import { BsArrowLeftShort, BsInstagram, BsArrowRightShort  } from 'react-icons/bs';
import './Gallery.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';


const galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null)
    
  const Scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft +=300
    }
    }
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo</h1>
        <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus similique molestias sapiente eveniet, </p>
        <button type="button" className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryimages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`} >
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>

        <div className="app__gallery-images-arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => Scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => Scroll('right')}/>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
