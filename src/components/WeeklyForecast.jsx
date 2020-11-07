import React from 'react';
import { Container,Row,Card } from "react-bootstrap";
import WeatherIcon from "../assets/weather-icon.png"

const WeeklyForecast = () => {
    return (
        <Container className="weekly-container">
      
        <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
  <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
          
  <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
          
  <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
          
  <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
  <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
  <Card className="daily-card">
    <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">
     Sat
      </Card.Subtitle>
    <Card.Img variant="top" src={WeatherIcon} />
      <Card.Title>26 C / 15 C</Card.Title>
    </Card.Body>
  </Card>
          
          
       
      </Container>
    )
}

export default WeeklyForecast;
