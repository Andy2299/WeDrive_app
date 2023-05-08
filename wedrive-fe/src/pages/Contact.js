import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Component/Navbar';
import ContactForm from '../Component/ContactForm';
import Footer from '../Component/Footer';
import './css/contact.css';
const Suppliers = () => {
  return (
    <Container>
       <Navbar />
      <Row className='contactPage'>
        <ContactForm />
      </Row>
      <Footer />
    </Container>
  );
};

export default Suppliers;
