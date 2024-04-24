import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactFooter = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '', // ajout du champ téléphone
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Remplacez 'your_service_id', 'your_template_id', 'your_user_id' par vos ID réels
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setShowModal(true); // Afficher la modale après l'envoi réussi
      }, error => {
        console.log('FAILED...', error);
      });

    // Réinitialiser le formulaire après l'envoi
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="background">
      <div className="contact-footer">
      <p className="contact-intro">
          Pour toute demande d'information ou pour l'élaboration d'un de vos projet, n'hésitez pas à me contacter via ce formulaire.
        </p>
        <Form onSubmit={handleSubmit}>
          <Row className="form-row">
            <Col sm={6}>
              <Form.Group controlId="formFirstName">
                <Form.Control
                  type="text"
                  placeholder="Prénom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="formLastName">
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="form-row">
            <Col sm={6}>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="formPhone">
                <Form.Control
                  type="tel"
                  placeholder="Téléphone (Facultatif)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Entrez votre message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">Envoyer</Button>
        </Form>
      </div>
      <footer className="custom-footer">
        © 2024 - Site développé par <a href="https://portfolio-florian-godeau.netlify.app" target="_blank" rel="noopener noreferrer">Florian Godeau</a>
      </footer>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Votre message a été envoyé avec succès!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactFooter;
