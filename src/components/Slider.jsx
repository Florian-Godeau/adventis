import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';

const FullscreenSlider = () => {
  return (
    <Carousel className="fullscreen-slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Début du deuxième Carousel.Item */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FullscreenSlider;
