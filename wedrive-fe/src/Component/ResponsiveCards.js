import React from 'react';
import { Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap';
import './css/ResposiveCards.css'
import cardsCars from '../imgs/cardsCars.png';
const ResponsiveCards = () => {
  const cardsData = [
    {
      title: 'Nuevo',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/crud-c7f1f.appspot.com/o/images%2FcardsCars.png?alt=media&token=577deaac-1416-441e-b2a9-e88e2d91d121',
      text: 'Tesla model 3',
    },
    {
      title: 'Nuevo',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/crud-c7f1f.appspot.com/o/images%2FcardsCars2.png?alt=media&token=cef21a52-7091-412f-8047-aa68bf521748',
      text: 'Toyota bz4x',
    },
    {
      title: 'Nuevo',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/crud-c7f1f.appspot.com/o/images%2FcardsCars3.png?alt=media&token=e072fd02-b365-45c3-990e-e998c852ba17',
      text: 'Audi e-tron',
    },
    {
      title: 'Nuevo',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/crud-c7f1f.appspot.com/o/images%2FcardsCars4.png?alt=media&token=fec8930a-4217-40c7-bfec-0ad4cf4fa4ce',
      text: 'BMW ix',
    },
  ];

  return (
    <Container className='carNew'>
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <CardGroup>
              <Card>
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Img src={card.imgSrc} />
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button className='btn-newcar'>Ver más</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResponsiveCards;
