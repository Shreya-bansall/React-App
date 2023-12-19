import React, { useState } from 'react';
import './Carousel.scss';

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5, image6]; 

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={prevImage}>
        &lt;
      </button>
      {images.length > 0 && (
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="image"
        />
      )}
      <button className="next-btn" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
