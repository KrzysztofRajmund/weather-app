import React, { Component, useState, useEffect } from "react";
import { Container, Row, Card, Form, Button } from "react-bootstrap";
import Cloudy from "../assets/cloudy.png";
import Raining from "../assets/raining.png";
import Sun from "../assets/sun.png";
import Snow from "../assets/snowflake.png";
import Mist from "../assets/mist.png";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDay } from ".././actions/fetchAction";
import WeeklyForecast from "./WeeklyForecast";

const DailyForecast = ({ city, getDay, dayWeather }) => {
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [weatherTemp, setWeatherTemp] = useState([]);

  useEffect(() => {
    getDay(city);
  }, [city]);

  useEffect(() => {
    setWeatherDesc(dayWeather.weather);
    setWeatherTemp(dayWeather.main);
  }, [dayWeather]);

  const getIcon = (iconDesc) => {
    switch (iconDesc) {
      case "Clear":
        return Sun;
        break;

      case "Mist":
        return Mist;
        break;

      case "Clouds":
        return Cloudy;
        break;

      case "Rain":
        return Raining;
        break;

      case "Snow":
        return Snow;
        break;

      default:
        return;
    }
  };

  return (
    <Container className="daily-container">
      <Card className="daily-card">
        <Card.Body>
          <Card.Img
            variant="top"
            src={
              weatherDesc === undefined || weatherDesc.length === 0
                ? ""
                : getIcon(weatherDesc[0].main)
            }
          />
          <Card.Title>
            {weatherTemp === undefined || weatherTemp.length === 0
              ? ""
              : Math.round(weatherTemp.temp - 273.15)}
            °C
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {weatherDesc === undefined || weatherDesc.length === 0
              ? ""
              : weatherDesc[0].description}
          </Card.Subtitle>
        </Card.Body>
      </Card>
     {
    city === undefined || city.length === 0 ? "" : <WeeklyForecast city={city} getIcon={getIcon}/>
     }
    </Container>
  );
};

DailyForecast.propTypes = {
  getDay: PropTypes.func.isRequired,
  dayWeather: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dayWeather: state.fetchReducer.dayWeather,
});

export default connect(mapStateToProps, { getDay })(DailyForecast);
