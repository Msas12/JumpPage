import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function PhotoCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/1.svg"
          alt="First slide"
        />
      </Carousel.Item>


      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/2.svg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/3.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/4.svg"
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/5.svg"
          alt="Fifth slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/6.svg"
          alt="Sixth slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/9.svg"
          alt="Seventh slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="imgs/10.svg"
          alt="Eighth slide"
        />
      </Carousel.Item>


    </Carousel>
  );
}

export default PhotoCarousel;