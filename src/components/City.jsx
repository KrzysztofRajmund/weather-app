import React from "react";
import { Container,Row,Card } from "react-bootstrap";

const City = () => {
  return (
    <Container className="city-container">
      
      <Card className="daily-card">
  <Card.Body>
    <Card.Title>Szczecin,PL</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
    Saturday,7th Nov 2020
    </Card.Subtitle>
  </Card.Body>
</Card>
        
     
    </Container>
  );
};

export default City;
