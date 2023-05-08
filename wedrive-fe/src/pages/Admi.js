import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Component/Navbar';
import AdminCars from '../Component/AdminCars';
// import AppCrud from '../Component/AppCrud';
import AdminBlog from '../Component/AdminBlog';

import { AppCrud, onDaleteContacto, onGetContactos, onUpdateContacto } from '../Component/AppCrud';
// import { AdminCars, onDaleteContacto, onGetContactos, onUpdateContacto } from '../Component/AdminCars';
// css
import './css/Admin.css'

// import Footer from '../Component/Footer';
const Suppliers = () => {
  return (
    <Container>
       <Navbar />
      <Row className='titleAdmin'>
        <Col>
          <h1 className="my-5">Area administrativa</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Aquí puedes agregar a los clientes</p>
        </Col>
      </Row>
      <AppCrud />
       <Col>
          <p>Aquí puedes agregar a los vehículos</p>
        </Col>
      <AdminCars />
      <Col>
          <p>Aquí puedes editar y eliminar blogs</p>
      </Col>
      <AdminBlog />

      




      
    </Container>
  );
};

export default Suppliers;
