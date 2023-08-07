import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="image1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Slide 2" />
        </div>
        {/* Add more slide items as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
