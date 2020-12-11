import React, { Component, useState, useEffect } from "react";
import { Container, Row, Card,Button } from "react-bootstrap";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWeek } from ".././actions/fetchAction";


const WeeklyForecast = ({getIcon, city, getWeek, weekWeather}) => {

    // const [weatherDesc, setWeatherDesc] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fiveDays, setFiveDays] = useState([]);

    useEffect(() => {
        getWeek(city);
        setFiveDays(weekWeather.list);
      }, []);

      useEffect(() => {
        getWeek(city);
        setFiveDays(weekWeather.list);
      }, [city]);
    

      useEffect(() => {
        setFiveDays(weekWeather.list);
      }, [weekWeather]);

      const getForecast = () =>{ 
           
            if(loading === false){
              setLoading(true);
            } else {
              setLoading(false);
            }
    }


    const dateHandler = (d) =>{
      const days = ["Sunday","Monday","Tuesday","Wendesday","Thursday", "Friday","Saturday"];
      const dayOfWeek = days[d.getDay()];
      return dayOfWeek.substr(0,3) ; 
    }


  return (
      <div className="weekly-component">
              <Button variant="warning" type="submit" 
              onClick={getForecast}
              >
        5 days Forecast
      </Button>
              <Container className="weekly-container">
    {loading ? fiveDays.filter( x => x.dt_txt.substr(-8,8) === "15:00:00" ).map((weather,index) =>{
      console.log(weather, "weather")
        return(
        <Card key={index} className="daily-card">
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted daily-card__subtitle">
          {dateHandler(new Date(weather.dt * 1000))}
          </Card.Subtitle>
          <Card.Img
            variant="top"
            src={getIcon(weather.weather[0].main)}
          />
          <Card.Title>
          {Math.round(weather.main.temp - 273.15)}

            °C
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          {weather.weather[0].description}
          </Card.Subtitle>
        </Card.Body>
      </Card>
        )
      }): null}
    </Container>
      </div>

  );
};

WeeklyForecast.propTypes = {
    getWeek: PropTypes.func.isRequired,
    weekWeather: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    weekWeather: state.fetchReducer.weekWeather,
  });

export default connect(mapStateToProps, { getWeek })(WeeklyForecast);
