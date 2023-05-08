import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Component/Navbar';
import BlogTable from '../Component/CreateBlog'
import { NavLink } from 'react-router-dom';
import ContainerBlog from '../Component/ContainerBlog'
import Footer from '../Component/Footer';


const Suppliers = () => {
  return (
    <Container className='blogCreate'>
       <Navbar />
      <Row className='blogContainer'>
      <ContainerBlog />
      </Row>

        
      <Footer />
    </Container>

  );
};

export default Suppliers;
