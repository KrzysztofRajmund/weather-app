import React, {Component,useState, useEffect} from 'react';
import {Form,Button,Container} from "react-bootstrap";

//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getDay} from '.././actions/fetchAction';

//components
import City from './City';
import DailyForecast from './DailyForecast';

const SearchForm = ({getDay,dayWeather}) => {


  const [city,setCity] = useState([]);
  const [search, setSearch] = useState("")


  const changeHandler = (event) =>{
    setSearch(event.target.value);

  }

  const submitHandler = (event) =>{
    event.preventDefault();
    setCity(search);
}

    return (
    <>
    <Form
     onSubmit={submitHandler}
     >
        <Form.Group>
          <Form.Control type="text" onChange={changeHandler} placeholder="Enter city name" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Get Weather
        </Button>
      </Form>
      {city.length === 0 || city === "" ? null : <City city={city} />}
      {city.length === 0 || city === "" ? null : <DailyForecast city={city} />}

</>
    
    )
}

SearchForm.propTypes = {
  getDay: PropTypes.func.isRequired,
  dayWeather: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
dayWeather: state.fetchReducer.dayWeather
});

export default connect(mapStateToProps,{getDay}) (SearchForm);

