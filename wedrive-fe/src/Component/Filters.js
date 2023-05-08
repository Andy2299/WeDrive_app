// src/Component/Filters.js
import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import './css/Filters.css'
const Filters = () => {
  return (
    <div className="filters">
      <h2>Filtros</h2>
      <div className="buttons">
        <Button className="m-1 btnFilter">Sedan</Button>
        <Button className="m-1 btnFilter">Sub</Button>
        <Button className="m-1 btnFilter">Deportivo</Button>
        <Button  className="m-1 btnFilter">Trabajo</Button>
        <Button  className="m-1 btnFilter">Buseta</Button>
        <Button className="m-1 btnFilter">Autobús</Button>
      </div>
      <Form>
        <Form.Group controlId="priceRange">
          <Form.Label>Rango de precios</Form.Label>
          <Form.Range />
        </Form.Group>
        <Form.Group controlId="autonomyRange">
          <Form.Label>Rango de autonomía</Form.Label>
          <Form.Range />
        </Form.Group>
        <Form.Group controlId="checkboxGroup">
          <Form.Check type="checkbox" label="2 Pasajeros" />
          <Form.Check type="checkbox" label="4 Pasajeros" />
          <Form.Check type="checkbox" label="7 Pasajeros" />
        </Form.Group>
        <Button className='btn-filterA'>Aplicar filtros</Button>
      </Form>
    </div>
  );
};

export default Filters;
