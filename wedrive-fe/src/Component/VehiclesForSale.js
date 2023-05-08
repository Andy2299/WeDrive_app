import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const VehiclesForSale = () => {
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const vehiclesCollection = collection(db, "vehicles");
      const vehiclesSnapshot = await getDocs(vehiclesCollection);
      const vehiclesList = vehiclesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setVehiclesData(vehiclesList);
    };

    fetchVehicles();
  }, []);

  const renderCards = () => {
    return vehiclesData.map((vehicle) => (
      <Col lg={4} md={6} sm={12} key={vehicle.id}>
        <Card className="mb-4">
          <Card.Img variant="top" src={vehicle.imageUrl} />
          <Card.Body>
            <Card.Title>{vehicle.title}</Card.Title>
            <Card.Text>{vehicle.text1}</Card.Text>
            <Card.Text>{vehicle.text2}</Card.Text>
            <Card.Text>{vehicle.text3}</Card.Text>
            <Button variant="primary">Botón</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Row>
      {renderCards()}
    </Row>
  );
};

export default VehiclesForSale;
