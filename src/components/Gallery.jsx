import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Modal from 'react-bootstrap/Modal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import images from '../data/imgGallery.json';
import CustomArrow from './CustomArrow';

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [category, setCategory] = useState('Tableaux');
  const [year, setYear] = useState('Tous');
  const [columns, setColumns] = useState(3);
  const [showDescription, setShowDescription] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setColumns(1);
      } else if (window.innerWidth <= 768) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => {
    setShow(false);
    setShowDescription(false); // Reset to image view when modal closes
  };
  
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
    setShowDescription(false); // Ensure we start with the image view
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setYear('Tous');
    sliderRef.current.slickGoTo(0);
  };

  const handleYearChange = (newYear) => {
    setYear(newYear);
    sliderRef.current.slickGoTo(0);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow icon="https://cdn.jsdelivr.net/gh/Florian-Godeau/adventis@master/src/assets/img/sliderarrowprev.png" />,
    nextArrow: <CustomArrow icon="https://cdn.jsdelivr.net/gh/Florian-Godeau/adventis@master/src/assets/img/sliderarrownext.png" />
  };

  const filteredImages = images.filter(image => 
    image.category === category && (year === 'Tous' || image.année === year)
  );

  const createSlides = () => {
    const slides = [];
    for (let i = 0; i < filteredImages.length; i += columns * 2) {
      slides.push(
        <div key={i}>
          <div className="row">
            {filteredImages.slice(i, i + columns).map((image) => (
              <div className={`col-${12 / columns}`} key={image.id} onClick={() => handleShow(image)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
              </div>
            ))}
          </div>
          <div className="row">
            {filteredImages.slice(i + columns, i + 2 * columns).map((image) => (
              <div className={`col-${12 / columns}`} key={image.id} onClick={() => handleShow(image)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      );
    }
    return slides;
  };

  const slides = createSlides();

  const hasInfo = currentImage.description || currentImage.type || currentImage.année || currentImage.format;

  return (
    <div className="gallery-background">
      <div className="category-buttons">
        <button 
          className={`category-button ${category === 'Tableaux' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Tableaux')}
        >
          Tableaux
        </button>
        <button 
          className={`category-button ${category === 'Fresques' ? 'active' : ''}`} 
          onClick={() => handleCategoryChange('Fresques')}
        >
          Fresques
        </button>
      </div>
      {category === 'Tableaux' && (
        <div className="year-buttons">
          <button 
            className={`year-button ${year === 'Tous' ? 'active' : ''}`} 
            onClick={() => handleYearChange('Tous')}
          >
            Tous
          </button>
          <button 
            className={`year-button ${year === '2021' ? 'active' : ''}`} 
            onClick={() => handleYearChange('2021')}
          >
            2021
          </button>
          <button 
            className={`year-button ${year === '2022' ? 'active' : ''}`} 
            onClick={() => handleYearChange('2022')}
          >
            2022
          </button>
          <button 
            className={`year-button ${year === '2023' ? 'active' : ''}`} 
            onClick={() => handleYearChange('2023')}
          >
            2023
          </button>
          <button 
            className={`year-button ${year === '2024' ? 'active' : ''}`} 
            onClick={() => handleYearChange('2024')}
          >
            2024
          </button>
        </div>
      )}
      <Slider ref={sliderRef} {...settings}>
        {slides}
      </Slider>
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>{currentImage.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            {!showDescription ? (
              <div className={`modal-image-container fade-in`}>
                <img src={currentImage.src} className="img-fluid modal-image" alt={currentImage.alt} />
                {hasInfo && (
                  <button className="info-button" onClick={handleToggleDescription}>Plus d'infos</button>
                )}
              </div>
            ) : (
              <div className={`modal-text-container fade-in`}>
                {currentImage.description && (
                  <p className="modal-text"><strong>Description:</strong> {currentImage.description}</p>
                )}
                {currentImage.type && (
                  <p className="modal-text"><strong>Type:</strong> {currentImage.type}</p>
                )}
                {currentImage.année && (
                  <p className="modal-text"><strong>Année:</strong> {currentImage.année}</p>
                )}
                {currentImage.format && (
                  <p className="modal-text"><strong>Format:</strong> {currentImage.format}</p>
                )}
                <button className="info-button" onClick={handleToggleDescription}>Retour</button>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
