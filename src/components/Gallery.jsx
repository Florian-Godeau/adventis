import React, { useState } from 'react';
import { Carousel, Modal, Button, Row, Col } from 'react-bootstrap';
import images from '../data/imgGallery.json'; // Assurez-vous que le chemin d'accès est correct

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [currentCategory, setCurrentCategory] = useState('Tableaux');

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  // Filtrer les images par la catégorie actuelle
  const filteredImages = images.filter(image => image.category === currentCategory);

  // Créer des slides pour le carrousel, avec 6 images par slide
  const slides = [];
  for (let i = 0; i < filteredImages.length; i += 6) {
    slides.push(filteredImages.slice(i, i + 6));
  }

  return (
    <>
      <Button onClick={() => setCurrentCategory('Tableaux')}>Tableaux</Button>
      <Button onClick={() => setCurrentCategory('Fresques')}>Fresques</Button>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row>
              {slide.map((image) => (
                <Col xs={6} md={4} key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="d-block w-100"
                    onClick={() => handleShow(image)}
                    style={{ cursor: 'pointer' }}
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
          <img src={currentImage.src} alt={currentImage.alt} className="img-fluid" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
