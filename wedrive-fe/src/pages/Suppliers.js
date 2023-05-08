import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Component/Navbar';
const Suppliers = () => {
  return (
    <Container>
       <Navbar />
      <Row>
        <Col>
          <h1 className="my-5">Abastecedores</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Aquí puedes agregar el contenido de la página de Abastecedores.</p>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Suppliers;
