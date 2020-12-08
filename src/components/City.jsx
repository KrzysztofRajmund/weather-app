import React, {Component,useState, useEffect} from 'react';
import { Container,Row,Card } from "react-bootstrap";
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getDay} from '.././actions/fetchAction';

const City = ({city,getDay,dayWeather}) => {

  useEffect(()=>{
    getDay(city);
  },[city])
  
  const dateHandler = (d) =>{

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let days = ["Sunday","Monday","Tuesday","Wendesday","Thursday", "Friday","Saturday"]

    let dayOfWeek = days[d.getDay()];
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


return `${dayOfWeek}, ${day} ${month} ${year}` 
  }


  return (
    <Container className="city-container">
      
      <Card className="daily-card">
  <Card.Body>
  <Card.Title>{dayWeather.name} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
    {dateHandler(new Date())}
    </Card.Subtitle>
  </Card.Body>
</Card>
        
     
    </Container>
  );
};

City.propTypes = {
  getDay: PropTypes.func.isRequired,
  dayWeather: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
dayWeather: state.fetchReducer.dayWeather
});


export default connect(mapStateToProps,{getDay})(City);
