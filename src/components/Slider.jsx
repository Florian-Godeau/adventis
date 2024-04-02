import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import imgSlider from '../data/imgSlider.json';

const FullscreenSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  // Gestionnaire pour ouvrir la modale avec l'image sélectionnée
  const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
    setShowModal(true);
  };

  return (
    <>
      <Carousel className="fullscreen-slider">
        {imgSlider.map((slide) => (
          <Carousel.Item key={slide.id} onClick={() => handleImageClick(slide.src)}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.altText}
              style={{ height: '100vh', cursor: 'pointer', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Body>
    <img src={selectedImg} alt="Enlarged pic" style={{ maxWidth: '100%', maxHeight: '80vh', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
  </Modal.Body>
</Modal>
    </>
  );
};

export default FullscreenSlider;

