import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css';
import './css/ContactForm.css';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uxdwqci',
        'template_9zjya75',
        e.target,
        'Id4X2SRBKlGVUZ4Xy'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: '¡Éxito!',
            text: 'Correo enviado exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Error',
            text: 'Error al enviar el correo',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      );
    e.target.reset();
  };

  return (
    <Container className="contactForm">
      <Row>
        <Col xs={12}>
          <h2>Contacto</h2>
          <Form onSubmit={sendEmail}>
            <Form.Group as={Row} className="form-group-spacing">
              <Col sm={12} md={6}>
                <Form.Control type="text" name="name" placeholder="Nombre" />
              </Col>
              <Col sm={12} md={6}>
                <Form.Control type="tel" name="phone" placeholder="Teléfono" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="form-group-spacing">
              <Col>
                <Form.Control type="email" name="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="form-group-spacing">
              <Col>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Mensaje"
                />
              </Col>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center ">
              <Button className="btn-send" type="submit">
                Enviar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
