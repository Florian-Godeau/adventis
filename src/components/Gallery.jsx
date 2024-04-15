import React, { useState } from 'react';
import { Carousel, Modal, Row, Col } from 'react-bootstrap'; // Import sans Button de Bootstrap
import images from '../data/imgGallery.json';

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [currentCategory, setCurrentCategory] = useState('Tableaux');

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const filteredImages = images.filter(image => image.category === currentCategory);

  const slides = [];
  for (let i = 0; i < filteredImages.length; i += 6) {
    slides.push(filteredImages.slice(i, i + 6));
  }

  return (
    <div className="gallery-background">
      <div className="category-buttons">
        <button
          type="button"
          className={currentCategory === 'Tableaux' ? 'active-button' : 'button'}
          onClick={() => setCurrentCategory('Tableaux')}
        >
          Tableaux
        </button>
        <button
          type="button"
          className={currentCategory === 'Fresques' ? 'active-button' : 'button'}
          onClick={() => setCurrentCategory('Fresques')}
        >
          Fresques
        </button>
      </div>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row>
              {slide.map((image) => (
                <Col xs={12} md={6} lg={4} key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="d-block w-100 gallery-image"
                    onClick={() => handleShow(image)}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentImage.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={currentImage.src} className="img-fluid" alt={currentImage.alt} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;

