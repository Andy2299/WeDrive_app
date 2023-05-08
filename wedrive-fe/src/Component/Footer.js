import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css'; // Asegúrate de importar el archivo CSS correcto
import logo from '../imgs/logo.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col  md={6}>
            <div className="logoFooter"> {/* Reemplaza esto con tu logo SVG */}
            <img
          src={logo}
          width="100"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
            </div>
            <p>
              Este es un párrafo descriptivo sobre tu empresa, productos o servicios.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
              </a>
              <a href="https://www.youtube.com/channel/your_channel_id" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faInstagram} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col>
                <h5>Columna 1</h5>
                <ul className="footer-links">
                  <li><a href="#">Enlace 1</a></li>
                  <li><a href="#">Enlace 2</a></li>
                  <li><a href="#">Enlace 3</a></li>
                  <li><a href="#">Enlace 4</a></li>
                </ul>
              </Col>
              <Col>
                <h5>Columna 2</h5>
                <ul className="footer-links">
                  <li><a href="#">Enlace 1</a></li>
                  <li><a href="#">Enlace 2</a></li>
                  <li><a href="#">Enlace 3</a></li>
                  <li><a href="#">Enlace 4</a></li>
                </ul>
              </Col>
              <Col>
                <h5>Columna 3</h5>
                <ul className="footer-links">
                  <li><a href="#">Enlace 1</a></li>
                  <li><a href="#">Enlace 2</a></li>
                  <li><a href="#">Enlace 3</a></li>
                  <li><a href="#">Enlace 4</a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
