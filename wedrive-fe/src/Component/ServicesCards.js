import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faWrench, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './css/ServicesCards.css'

const ServicesCards = () => {
  const cardsData = [
    {
      title: 'Servicio 1',
      icon: faRocket,
      text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    },
    {
      title: 'Servicio 2',
      icon: faWrench,
      text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    },
    {
      title: 'Servicio 3',
      icon: faLightbulb,
      text: 'Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    },
  ];

  return (
    <Container className='serviceCards'>
      <h2 className="text-center mb-4">Servicios</h2>
    <Row>
      {cardsData.map((card, index) => (
        <Col key={index} xs={12} md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#00B889'}}>
                <FontAwesomeIcon icon={card.icon} size="2x" color="white" />
              </div>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default ServicesCards;

