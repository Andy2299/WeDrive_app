import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Component/Navbar';
import { NavLink } from 'react-router-dom';
import './css/login.css'
const Suppliers = () => {
  return (
    <Container>
       <Navbar />
      <Row>
  
      </Row>
      <Row className='sectionLogin'>
        <div className='containerLogin'>
          <h1>Ingresar al Administrador</h1>
            <NavLink className="nav-link btn-admin" to="/admi" activeClassName="active">
              Administrador
            </NavLink>
       
        </div>
      </Row>
      
    </Container>
  );
};

export default Suppliers;
