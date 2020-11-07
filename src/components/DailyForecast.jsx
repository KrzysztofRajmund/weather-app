import React from 'react';
import { Container,Row,Card } from "react-bootstrap";
import WeatherIcon from "../assets/weather-icon.png"

const DailyForecast = () => {
    return (
        <Container className="daily-container">
      
        <Card className="daily-card">
    <Card.Body>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>10 C / 2 C</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
     Cloudy
      </Card.Subtitle>
    </Card.Body>
  </Card>
          
       
      </Container>
    )
}

export default DailyForecast;
